// Importe as macros necessárias do Rocket
#[macro_use]
extern crate rocket;

// Importe outros módulos e estruturas conforme necessário
use rocket::form::Form;
use rocket_cors::{AllowedOrigins, CorsOptions};
use rocket::response::status::Custom;
use rocket::http::Status;


// Estrutura para representar os dados do usuário
#[derive(Debug)]
struct User<'a> {
    username: &'a str,
    password: &'a str,
}

// Simulação de um banco de dados de usuários
const USERS: &[User] = &[
    User { username: "admin", password: "password" },
    User { username: "user", password: "1234" },
];

// Estrutura para representar os dados do formulário de login
#[derive(FromForm)]
struct LoginForm {
    username: String,
    password: String,
}

// Função para verificar se o usuário existe com base nos dados fornecidos
fn authenticate_user(username: &str, password: &str) -> bool {
    USERS.iter().any(|user| user.username == username && user.password == password)
}

// Defina um endpoint para lidar com as solicitações de login
#[post("/login", data = "<form>")]
fn login(form: Form<LoginForm>) -> Custom<String> {
    // Acesse os dados do formulário
    let username = &form.username;
    let password = &form.password;

        // Log dos dados enviados do frontend
        println!("Dados enviados do frontend: username={}, password={}", username, password);

    // Verifique se o usuário existe com os dados fornecidos
    if authenticate_user(username, password) {
        // Log se o usuário foi autenticado com sucesso
        println!("Usuário autenticado com sucesso: {}", username);
        Custom(Status::Ok, "Login successful".to_string())
    } else {
        println!("Usuário não autenticado: {}", username);
        Custom(Status::Unauthorized, "Invalid username or password".to_string())
    }
}

// Função principal para iniciar o Rocket e montar as rotas
#[launch]
fn rocket() -> _ {
    // Configurar as opções CORS
    let cors = CorsOptions::default()
        .allowed_origins(AllowedOrigins::all())
        .to_cors()
        .expect("Falha ao construir as configurações CORS");

    rocket::build()
        .attach(cors)  // Anexar as configurações CORS ao Rocket
        .mount("/", routes![login])
}
