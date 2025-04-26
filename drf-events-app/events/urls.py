from events.views import CommentViewSet, EventViewSet, CategoryViewSet
from rest_framework.routers import DefaultRouter
from events.views import TagViewSet
from events.views import category_list, tag_list
from django.urls import include, path
from events.views import CommentViewSet, MeView, CreateCommentView



router = DefaultRouter()
router.register(r'events', EventViewSet)
router.register(r'categories', CategoryViewSet)  
router.register(r'tags', TagViewSet)
router.register(r'comments', CommentViewSet)


urlpatterns = [
     path('me/', MeView.as_view(), name='me'),
    path('comment/create/', CreateCommentView.as_view(), name='create-comment'),
    path('categories-fbv/', category_list),
    path('tags-fbv/', tag_list),
    path('me/', MeView.as_view(), name='me'),
    path('comment/create/', CreateCommentView.as_view(), name='create-comment'),
    path('', include(router.urls)),
]

urlpatterns += router.urls