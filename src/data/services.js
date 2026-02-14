// src/data/services.js
import {
  FaTools,
  FaClock,
  FaShieldAlt,
  FaBuilding,
  FaPaintRoller,
  FaCouch,
  FaSnowflake,
  FaWind,
  FaBolt,
  FaPlug,
  FaWater,
  FaRoad,
  FaIndustry,
  FaCheckCircle
} from "react-icons/fa"

export const services = [

{
  slug: "building-maintenance",
  title: "Building Maintenance",
  shortDescription:
    "Comprehensive facility maintenance services ensuring compliance, safety, and long-term asset performance.",
  description:
    "Azcon provides full-spectrum building maintenance across HVAC, MEP systems, civil works, firefighting, and utilities with 24/7 emergency response and AMC programs across the UAE.",
  image: "/building-maintenace.jpg",

  features: [
    { label: "Preventive & corrective maintenance", icon: FaTools },
    { label: "MEP systems servicing", icon: FaBuilding },
    { label: "HVAC & firefighting systems", icon: FaSnowflake },
    { label: "Structural & civil repairs", icon: FaShieldAlt },
    { label: "Facade cleaning & restoration", icon: FaPaintRoller },
    { label: "Annual maintenance contracts", icon: FaClock },
    { label: "24/7 emergency response", icon: FaCheckCircle }
  ],

  faqs: [
    {
      q: "What services are included in building maintenance in UAE?",
      a: "Our maintenance covers HVAC, electrical, plumbing, civil works, firefighting systems, inspections, preventive planning, and emergency repairs under one integrated service."
    },
    {
      q: "Do you provide 24/7 emergency support?",
      a: "Yes, Azcon operates technical response teams around the clock across all Emirates."
    },
    {
      q: "Do you offer annual maintenance contracts (AMC)?",
      a: "Yes, we provide flexible AMC packages tailored to facility size, systems, and service frequency."
    },
    {
      q: "Are your services authority compliant?",
      a: "All works comply with Dubai Municipality, Civil Defense, DEWA and relevant UAE regulations."
    }
  ]
},

{
  slug: "infrastructure",
  title: "Infrastructure Maintenance",
  shortDescription:
    "Long-term public and private infrastructure maintenance services.",
  description:
    "We maintain roads, drainage networks, utilities, water systems, landscaping, and environmental assets.",
  image: "/infrastructure11.jpeg",

  features: [
    { label: "Road & pavement maintenance", icon: FaRoad },
    { label: "Drainage network services", icon: FaWater },
    { label: "Utility systems upkeep", icon: FaIndustry },
    { label: "Landscaping & environment", icon: FaBuilding }
  ],

 faqs: [
  {
    q: "What types of infrastructure do you maintain?",
    a: "We maintain roads, pavements, drainage networks, water systems, utilities, landscaping, and environmental assets."
  },
  {
    q: "Do you handle large-scale infrastructure projects?",
    a: "Yes. We work on municipal, commercial, and private infrastructure developments across the UAE."
  },
  {
    q: "Do you offer long-term maintenance contracts?",
    a: "Yes, we provide scheduled maintenance programs to ensure asset longevity and compliance."
  },
  {
    q: "Do you repair damaged roads and drainage systems?",
    a: "Yes. We handle crack sealing, resurfacing, pipeline repairs, and drainage cleaning."
  },
  {
    q: "Can you maintain utility and pumping stations?",
    a: "Yes. We service pumping systems, electrical networks, and infrastructure utilities."
  },
  {
    q: "Do you provide emergency response services?",
    a: "Yes. Our teams respond to flooding, system failures, and urgent infrastructure issues."
  }
]

},

{
  slug: "fit-out-works",
  title: "Fit-Out Works",
  shortDescription:
    "Complete turnkey interior fit-out solutions for commercial, residential, and hospitality spaces across the UAE.",

  description:
    "Azcon delivers premium turnkey fit-out projects from concept design to final handover. Our services include interior planning, partitions, ceilings, flooring, bespoke joinery, electrical works, HVAC integration, plumbing, and authority-approved execution for high-quality commercial and residential spaces.",

  image: "/fitoutworks.jpg",

  features: [
    { label: "Interior planning & space optimization", icon: FaCouch },
    { label: "Partition walls & ceiling systems", icon: FaBuilding },
    { label: "Custom joinery & bespoke furniture", icon: FaPaintRoller },
    { label: "Lighting & electrical fit-out works", icon: FaBolt },
    { label: "HVAC & plumbing integration", icon: FaWind },
    { label: "Fire safety & compliance systems", icon: FaShieldAlt }
  ],

  faqs: [
    {
      q: "Do you provide complete turnkey fit-out services?",
      a: "Yes. We manage the entire project including design, approvals, construction, installation, and final handover — all under one contract."
    },
    {
      q: "What types of properties do you handle?",
      a: "We deliver fit-out projects for offices, retail stores, villas, hotels, clinics, restaurants, warehouses, and commercial buildings."
    },
    {
      q: "Do you assist with UAE authority approvals?",
      a: "Yes. We handle all required approvals from Dubai Municipality, Civil Defense, DEWA, and other relevant authorities."
    },
    {
      q: "Can you customize interiors to match brand identity?",
      a: "Absolutely. All designs and finishes are tailored to your brand, functionality requirements, and budget."
    },
    {
      q: "How long does a typical fit-out project take?",
      a: "Timelines depend on project size and scope, but we provide clear schedules and fast-track execution for commercial deadlines."
    },
    {
      q: "Do you offer post-handover maintenance support?",
      a: "Yes. We provide maintenance and technical support to keep interiors in top condition after project completion."
    }
  ]
},


{
  slug: "hvac-works",
  title: "HVAC Works",
  shortDescription:
    "Energy-efficient HVAC design, installation, testing, and long-term maintenance solutions across the UAE.",

  description:
    "Azcon delivers complete HVAC engineering solutions including system design, heat load calculations, installation, testing, commissioning, and ongoing maintenance. Our HVAC systems are built for optimal indoor comfort, energy efficiency, and full compliance with UAE regulatory standards for residential, commercial, and industrial facilities.",

  image: "/hvac.jpg",

  features: [
    { label: "HVAC system design & heat load calculations", icon: FaWind },
    { label: "Ducting & chilled water piping installation", icon: FaIndustry },
    { label: "Fresh air & ventilation systems", icon: FaSnowflake },
    { label: "Chiller plants & cooling solutions", icon: FaBuilding },
    { label: "Testing, commissioning & AMC services", icon: FaClock }
  ],

  faqs: [
    {
      q: "Do you handle large commercial and industrial HVAC projects?",
      a: "Yes. We execute HVAC systems for villas, offices, malls, factories, warehouses, and high-rise developments across the UAE."
    },
    {
      q: "Are your HVAC installations compliant with UAE regulations?",
      a: "Absolutely. All systems meet Dubai Municipality, Civil Defense, DEWA, and local authority requirements."
    },
    {
      q: "Do you offer preventive HVAC maintenance contracts?",
      a: "Yes. We provide customized AMC plans covering routine servicing, inspections, emergency repairs, and performance optimization."
    },
    {
      q: "Can you improve energy efficiency in existing HVAC systems?",
      a: "Yes. We perform system audits, upgrades, and retrofits to reduce energy consumption and improve cooling performance."
    },
    {
      q: "Do you provide HVAC system testing and commissioning?",
      a: "Yes. Every system is fully tested, balanced, and commissioned to ensure safe and efficient operation."
    },
    {
      q: "How often should HVAC systems be serviced?",
      a: "We recommend quarterly preventive maintenance for commercial facilities and bi-annual servicing for residential systems."
    }
  ]
}
,

{
  slug: "electrical",
  title: "Electrical Works",
  shortDescription:
    "Complete electrical engineering, installation, and compliance services.",
  description:
    "Azcon handles power systems, lighting, ELV, CCTV, structured cabling, testing, and long-term maintenance.",
  image: "/electrical.png",

  features: [
    { label: "Power distribution systems", icon: FaPlug },
    { label: "Lighting & control solutions", icon: FaBolt },
    { label: "ELV & networking systems", icon: FaIndustry },
    { label: "CCTV & security systems", icon: FaShieldAlt },
    { label: "Testing & certification", icon: FaCheckCircle }
  ],

  faqs: [
  {
    q: "Are your electrical installations compliant with UAE regulations?",
    a: "Yes. All electrical works comply with DEWA, Dubai Municipality, Civil Defense, and UAE safety standards."
  },
  {
    q: "Do you handle both residential and commercial electrical projects?",
    a: "We manage electrical works for villas, apartments, offices, retail spaces, warehouses, factories, and large commercial developments."
  },
  {
    q: "Can you upgrade old electrical systems?",
    a: "Yes. We modernize outdated wiring, panels, and power systems to meet current load requirements and safety standards."
  },
  {
    q: "Do you provide electrical maintenance contracts?",
    a: "Yes, we offer preventive maintenance and emergency support through customized AMC packages."
  },
  {
    q: "Do you install CCTV and low-current systems?",
    a: "Absolutely. We design and install CCTV, access control, fire alarms, structured cabling, and ELV systems."
  },
  {
    q: "Do you handle testing and certification?",
    a: "Yes. All systems undergo load testing, commissioning, and authority-required inspections before handover."
  }
]
},

{
  slug: "plumbing-contracting",
  title: "Plumbing Contracting",
  shortDescription:
    "Professional plumbing installation and maintenance services.",
  description:
    "We design and maintain water supply, drainage, and sanitary systems for all property types.",
  image: "/plumbing.jpg",

  features: [
    { label: "Water supply systems", icon: FaWater },
    { label: "Drainage & sewer networks", icon: FaRoad },
    { label: "Sanitary installations", icon: FaBuilding },
    { label: "Leak detection & testing", icon: FaCheckCircle }
  ],

 faqs: [
  {
    q: "Do you provide complete plumbing installation for new buildings?",
    a: "Yes. We handle full plumbing systems for villas, apartments, commercial buildings, and industrial facilities."
  },
  {
    q: "Do you repair leaks and blockages urgently?",
    a: "Yes. Our emergency teams respond quickly to water leaks, drainage blockages, and pipe failures."
  },
  {
    q: "Do you manage authority approvals and inspections?",
    a: "Yes, we coordinate all municipal approvals and final testing with UAE authorities."
  },
  {
    q: "Can you replace old plumbing systems?",
    a: "Yes. We upgrade aging pipelines, sanitary systems, and water networks to improve performance and safety."
  },
  {
    q: "Do you offer plumbing maintenance contracts?",
    a: "Yes, preventive maintenance packages are available to avoid leaks, damage, and costly repairs."
  },
  {
    q: "Do you work on large commercial projects?",
    a: "Yes. We handle plumbing systems for hotels, malls, factories, hospitals, and large developments."
  }
]

},

{
  slug: "metal-fabrication",
  title: "Metal Fabrication",
  shortDescription:
    "Structural steel fabrication and custom metal works.",
  description:
    "We fabricate, coat, and install steel structures for industrial and commercial projects.",
  image: "/metal-fabrications.jpg",

  features: [
    { label: "Structural steel fabrication", icon: FaIndustry },
    { label: "Welding & cutting services", icon: FaTools },
    { label: "Protective coatings", icon: FaShieldAlt },
    { label: "On-site installation", icon: FaBuilding }
  ],

  faqs: [
  {
    q: "Do you fabricate large structural steel projects?",
    a: "Yes. We fabricate trusses, beams, platforms, staircases, sheds, and industrial steel structures."
  },
  {
    q: "Do you provide custom metal works?",
    a: "Yes. We create architectural metal features, railings, canopies, frames, and bespoke structures."
  },
  {
    q: "Are your welding works certified?",
    a: "Yes. All fabrication follows quality standards with skilled certified welders."
  },
  {
    q: "Do you apply protective coatings?",
    a: "Yes. We provide anti-rust treatments, powder coating, and industrial-grade surface protection."
  },
  {
    q: "Do you handle on-site installation?",
    a: "Yes. Our team manages delivery, erection, alignment, and final fixing."
  },
  {
    q: "Do you work on industrial facilities?",
    a: "Yes. We support factories, warehouses, plants, and heavy-duty structural projects."
  }
]

},



]
