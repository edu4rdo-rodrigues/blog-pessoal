use rocket::{get, post, put, delete};
use rocket::serde::json::Json;
use rocket_contrib::databases::diesel;
use diesel::prelude::*;

use crate::models::{Post, User};

#[database("sqlite_database")]
pub struct DbConn(diesel::SqliteConnection);

#[get("/posts")]
pub fn get_posts(conn: DbConn) -> Json<Vec<Post>> {
    let posts = Post::load_all_from_database(&conn);
    Json(posts)
}

#[post("/posts", data = "<post>")]
pub fn create_post(post: Json<Post>, conn: DbConn) -> Json<Post> {
    let new_post = post.into_inner();
    let created_post = new_post.save_to_database(&conn);
    Json(created_post)
}

// Implemente rotas semelhantes para atualizar e excluir postagens, bem como para lidar com usuários, etc.
