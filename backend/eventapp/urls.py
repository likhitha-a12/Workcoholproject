

from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from eventapp.views import EventViewSet, BookingViewSet,ContactMessageViewSet, test_api
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'events', EventViewSet)
router.register(r'contacts', ContactMessageViewSet)
router.register(r'bookings', BookingViewSet)  #
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/test/', test_api),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
