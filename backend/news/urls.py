from django.urls import path, include
from rest_framework import routers

from .views import PostAPIView, CommentAPIView


router = routers.SimpleRouter()
router.register('post', PostAPIView)
router.register('comment', CommentAPIView)


urlpatterns = [
    path('', include(router.urls)),
]
