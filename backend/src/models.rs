use rocket::serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Post {
    pub id: i32,
    pub title: String,
    pub content: String,
    // Adicione mais campos conforme necessário, como data de criação, autor, etc.
}

#[derive(Debug, Serialize, Deserialize)]
pub struct User {
    pub id: i32,
    pub username: String,
    pub email: String,
    // Adicione mais campos conforme necessário, como senha (armazenada de forma segura), etc.
}
