import CustomRatingComponent from '@/components/common/CustomRatingComponent'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Video, 
  User, 
  AlertCircle,
  CheckCircle,
  XCircle
} from 'lucide-react'

const AppointmentPageV1 = () => {
  // Mock data with different appointment statuses
  const appointments = [
    {
      id: 1,
      doctor: {
        name: "Dr. Richard James",
        specialty: "General Physician",
        image: "/api/placeholder/140/140",
        rating: 4.8,
        totalReviews: 234
      },
      date: "2024-07-25",
      time: "11:30 AM",
      status: "upcoming", // upcoming, completed, cancelled
      type: "video", // video, in-person
      address: "123 Medical Center, Downtown Health Complex",
      fee: "$150",
      isPaid: false
    },
    {
      id: 2,
      doctor: {
        name: "Dr. Sarah Wilson",
        specialty: "Cardiologist",
        image: "/api/placeholder/140/140",
        rating: 4.9,
        totalReviews: 187
      },
      date: "2024-07-20",
      time: "2:00 PM",
      status: "completed",
      type: "in-person",
      address: "456 Heart Care Clinic, Medical District",
      fee: "$200",
      isPaid: true
    },
    {
      id: 3,
      doctor: {
        name: "Dr. Michael Chen",
        specialty: "Dermatologist",
        image: "/api/placeholder/140/140",
        rating: 4.7,
        totalReviews: 156
      },
      date: "2024-07-15",
      time: "9:00 AM",
      status: "cancelled",
      type: "video",
      address: "Online Consultation",
      fee: "$120",
      isPaid: false
    }
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'upcoming':
        return <Badge variant="default" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
          <CheckCircle className="w-3 h-3 mr-1" />
          Upcoming
        </Badge>
      case 'completed':
        return <Badge variant="default" className="bg-green-100 text-green-800 hover:bg-green-100">
          <CheckCircle className="w-3 h-3 mr-1" />
          Completed
        </Badge>
      case 'cancelled':
        return <Badge variant="destructive" className="bg-red-100 text-red-800 hover:bg-red-100">
          <XCircle className="w-3 h-3 mr-1" />
          Cancelled
        </Badge>
      default:
        return null
    }
  }

  const getTypeIcon = (type: string) => {
    return type === 'video' ? <Video className="w-4 h-4" /> : <User className="w-4 h-4" />
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const isUpcoming = (appointment: any) => appointment.status === 'upcoming'
  const isCompleted = (appointment: any) => appointment.status === 'completed'
  const isCancelled = (appointment: any) => appointment.status === 'cancelled'

  return (
    <div className='container py-4 md:py-10 max-w-4xl mx-auto'>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className='text-2xl md:text-3xl font-bold mb-2'>My Appointments</h1>
          <p className='text-muted-foreground'>
            Manage your healthcare appointments and consultations
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button className="w-full md:w-auto">
            <Calendar className="w-4 h-4 mr-2" />
            Book New Appointment
          </Button>
        </div>
      </div>

      {appointments.length === 0 ? (
        <Card className="text-center py-12">
          <CardContent>
            <Calendar className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-semibold mb-2">No appointments yet</h3>
            <p className="text-muted-foreground mb-4">
              Start by booking your first appointment with a healthcare provider
            </p>
            <Button>Book Appointment</Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <Card key={appointment.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="p-4 md:p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    
                    {/* Doctor Info Section */}
                    <div className="flex gap-4 flex-1">
                      <Avatar className="h-20 w-20 md:h-24 md:w-24 flex-shrink-0">
                        <AvatarImage src={appointment.doctor.image} alt={appointment.doctor.name} />
                        <AvatarFallback className="bg-primary/10 text-primary text-lg">
                          {appointment.doctor.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-lg text-foreground">
                              {appointment.doctor.name}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-1">
                              {appointment.doctor.specialty}
                            </p>
                            <div className="flex items-center gap-1 mb-2">
                              <CustomRatingComponent 
                                defaultValue={appointment.doctor.rating} 
                                readOnly 
                                size={14} 
                              />
                              <span className="text-xs text-muted-foreground ml-1">
                                {appointment.doctor.rating} ({appointment.doctor.totalReviews} reviews)
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {getStatusBadge(appointment.status)}
                          </div>
                        </div>
                        
                        {/* Appointment Details */}
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(appointment.date)}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>{appointment.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            {getTypeIcon(appointment.type)}
                            <span>{appointment.type === 'video' ? 'Video Consultation' : 'In-Person Visit'}</span>
                          </div>
                          <div className="flex items-start gap-2 text-muted-foreground">
                            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <span className="line-clamp-2">{appointment.address}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Actions Section */}
                    <div className="flex flex-col justify-between items-end min-w-0 md:w-48">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-lg font-semibold">{appointment.fee}</span>
                        {appointment.isPaid && (
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            Paid
                          </Badge>
                        )}
                      </div>
                      
                      <div className="w-full space-y-2">
                        {isUpcoming(appointment) && (
                          <>
                            {!appointment.isPaid && (
                              <Button className="w-full" size="sm">
                                Pay Now
                              </Button>
                            )}
                            <Button 
                              variant="outline" 
                              className="w-full hover:border-red-600/70 hover:text-red-500 hover:bg-transparent"
                              size="sm"
                            >
                              Cancel
                            </Button>
                            {/* {appointment.type === 'video' && (
                              <Button variant="outline" className="w-full" size="sm">
                                <Video className="w-4 h-4 mr-2" />
                                Join Call
                              </Button>
                            )} */}
                          </>
                        )}
                        
                        {isCompleted(appointment) && (
                          <>
                            <Button variant="outline" className="w-full" size="sm">
                              View Report
                            </Button>
                            <Button variant="outline" className="w-full" size="sm">
                              Book Again
                            </Button>
                          </>
                        )}
                        
                        {isCancelled(appointment) && (
                          <Button variant="outline" className="w-full" size="sm">
                            Book Again
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Payment Warning for Upcoming Unpaid Appointments */}
                {isUpcoming(appointment) && !appointment.isPaid && (
                  <>
                    <Separator />
                    <div className="px-4 py-3 bg-amber-50 border-l-4 border-amber-400">
                      <div className="flex items-center gap-2 text-amber-800">
                        <AlertCircle className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          Payment required to confirm your appointment
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

export default AppointmentPageV1