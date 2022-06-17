from .models import Post


def listPosts_resolver(obj, info):
    try:
        posts = [post.to_dict() for post in Post.query.all()]
        payload = {"success": True, "post": posts}
    except Exception as error:
        payload = {"success": False, "errors": [str(error)]}
    return payload


def getPost_resolver(obj, info, id):
    try:
        post = Post.query.get(id)
        payload = {"success": True, "post": post.to_dict()}
        print(Post.query)
    except AttributeError:
        payload = {"success": False, "errors": ["Post item matching {id} not found"]}
    return payload
