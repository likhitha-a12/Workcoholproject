from django.contrib import admin
from django.urls import path, include
from eventpr.routers import router
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include((router.urls, 'core_api'), namespace='core_api')),
]

# Serve media files in development
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
