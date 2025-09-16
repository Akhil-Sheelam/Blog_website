from django.contrib import admin
from .models import Post, Comment

# Customize admin panel titles
admin.site.site_header = "My Blog Admin"
admin.site.site_title = "My Blog Portal"
admin.site.index_title = "Welcome to My Blog Dashboard"

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'created_at')
    search_fields = ('title', 'content')

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('post', 'author', 'created_at')
    search_fields = ('post__title', 'author__username')  # optional for better search
