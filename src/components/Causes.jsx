import Reveal from './ui/Reveal.jsx'
import CampaignCard from './CampaignCard.jsx'

const donationCategories = [
  {
    id: 'books',
    icon: 'BookOpen',
    title: 'Books & Educational Materials',
    description:
      'Give storybooks, textbooks, learning materials, and other resources that can help someone learn and grow.',
    accent: 'sky',
  },

  {
    id: 'clothes',
    icon: 'Shirt',
    title: 'Clothes & Shoes',
    description:
      'Donate clean, gently used clothing and shoes that are still in good condition and ready to be used again.',
    accent: 'meadow',
  },

  {
    id: 'school-supplies',
    icon: 'Pencil',
    title: 'School Supplies',
    description:
      'Help students by donating notebooks, stationery, backpacks, art supplies, and other learning essentials.',
    accent: 'deepsea',
  },

  {
    id: 'toys',
    icon: 'Gamepad2',
    title: "Toys & Children's Items",
    description:
      'Share toys, games, and useful children’s items that can bring joy and support to children in need.',
    accent: 'sky',
  },

  {
    id: 'household',
    icon: 'House',
    title: 'Household Essentials',
    description:
      'Donate useful household items that can make everyday life easier for individuals and families.',
    accent: 'meadow',
  },

  {
    id: 'other',
    icon: 'Gift',
    title: 'Other Useful Items',
    description:
      'Have something useful that does not fit a category? You can still share it and help it find a new purpose.',
    accent: 'deepsea',
  },
]

export default function Causes() {
  return (
    <section
      id="causes"
      className="relative overflow-hidden bg-white/60 section-pad"
    >

      {/* Background decoration */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-20
          h-72
          w-72
          rounded-full
          bg-sky-100/50
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          -right-32
          bottom-10
          absolute
          h-80
          w-80
          rounded-full
          bg-meadow-400/10
          blur-3xl
        "
      />


      <div className="container-max relative z-10">

        {/* Heading */}

        <div className="mx-auto mb-14 max-w-2xl text-center">

          <Reveal>

            <span className="eyebrow justify-center">
              What you can give
            </span>

            <h2
              className="
                mt-4
                font-display
                text-3xl
                font-extrabold
                tracking-tight
                text-ink
                sm:text-4xl
                lg:text-5xl
              "
            >
              Give What You Can.
              <span className="block text-sky-500">
                Make It Matter.
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-xl
                text-sm
                leading-relaxed
                text-slate-muted
                sm:text-base
              "
            >
              Have something useful that you no longer need?
              Your everyday items can find a new home and become
              something meaningful for someone else.
            </p>

          </Reveal>

        </div>


        {/* Donation Categories */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {donationCategories.map((category, i) => (

            <Reveal
              key={category.id}
              delay={(i % 3) * 120}
            >

              <CampaignCard cause={category} />

            </Reveal>

          ))}

        </div>


        {/* Bottom message */}

        <Reveal delay={500}>

          <div
            className="
              mx-auto
              mt-12
              max-w-3xl
              rounded-2xl
              border
              border-sky-100
              bg-sky-50/60
              px-6
              py-5
              text-center
            "
          >

            <p className="text-sm font-semibold text-ink">
              Not sure if your item is suitable?
            </p>

            <p className="mt-1 text-xs leading-relaxed text-slate-muted">
              Don't worry. Add a photo and a few details when you submit
              your donation, and HopeCloud can help determine where it
              can create the most value.
            </p>

          </div>

        </Reveal>

      </div>

    </section>
  )
}