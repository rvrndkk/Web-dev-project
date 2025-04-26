from django.contrib import admin
from .models import Event, Category
from .models import Tag
from .models import Comment

admin.site.register(Comment)
admin.site.register(Tag)
admin.site.register(Event)
admin.site.register(Category)
