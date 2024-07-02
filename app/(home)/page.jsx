import React from 'react'
import IntroductionSection from './components/IntroductionSection'
import ConsultationModal from './components/ConsultationModal'
import SectionWrapper from '@/partials/sections/Section/SectionWrapper'
import FlexSection from '@/partials/sections/Section/FlexSection'

function page() {
  return (
    <SectionWrapper extraClass={"pt-0 pb-0"}>
      <IntroductionSection />
      <ConsultationModal />
    </SectionWrapper>
  )
}

export default page
