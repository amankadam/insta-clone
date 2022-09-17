export interface userDetailsI {
    name: string,
    desc?: string,
    url?: string,
    category?: string,
    img_url?: string,
    followers: number,
    following: number,
    posts: PostI[]
}
export interface CommentI {
    text: string,
    user_img: string,
    // user_profile: string,
    user_name: string
}
export interface PostI {
    post_url: string,
    post_desc?: string,
    likes: number,
    id: number,
    comments: CommentI[]
}