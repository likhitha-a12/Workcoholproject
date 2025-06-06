from rest_framework import routers
from eventapp.viewsets import EventViewSet, BookingViewSet, ContactMessageViewSet

router = routers.DefaultRouter()
router.register(r'events', EventViewSet)
router.register(r'bookings', BookingViewSet)
router.register(r'contacts', ContactMessageViewSet)
