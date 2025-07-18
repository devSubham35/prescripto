import AppointmentBookingUI from './AppointmentBookingUI'
import LandingHeroUI from './LandingHeroUI'
import SpecialityCategoryUI from './SpecialityCategoryUI'
import TopDoctorsUI from './TopDoctorsUI'

const LandingPage = () => {
  return (
    <>
      <LandingHeroUI />
      <SpecialityCategoryUI />
      <TopDoctorsUI />
      <AppointmentBookingUI />
    </>
  )
}

export default LandingPage