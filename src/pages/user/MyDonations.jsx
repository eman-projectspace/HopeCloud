import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  Gift,
  Heart,
  Image as ImageIcon,
  MapPin,
  Package,
  Shirt,
  Sparkles,
  Truck,
  Upload,
  XCircle,
} from 'lucide-react'

import { Link } from 'react-router-dom'
import { useState } from 'react'

const donations = [
  {
    id: 1,
    item: 'Children Story Books',
    category: 'Books',
    condition: 'Like New',
    quantity: 8,
    date: 'Aug 24, 2026',
    status: 'Delivered',
    statusType: 'delivered',
    location: 'Lahore',
    recipient: 'A local child education center',
    description:
      'Colorful story books and early learning books for children.',
    image:
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    item: 'Winter Clothes',
    category: 'Clothes',
    condition: 'Good',
    quantity: 6,
    date: 'Aug 19, 2026',
    status: 'In Transit',
    statusType: 'transit',
    location: 'Lahore',
    recipient: 'Families in need',
    description:
      'Clean and warm winter clothes suitable for children.',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    item: 'School Supplies',
    category: "Children's Items",
    condition: 'New',
    quantity: 12,
    date: 'Aug 12, 2026',
    status: 'Processing',
    statusType: 'processing',
    location: 'Lahore',
    recipient: 'Waiting for recipient matching',
    description:
      'Notebooks, pencils, colors and other basic school supplies.',
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    item: 'Children Clothing Bundle',
    category: 'Clothes',
    condition: 'Good',
    quantity: 10,
    date: 'Jul 28, 2026',
    status: 'Delivered',
    statusType: 'delivered',
    location: 'Lahore',
    recipient: 'Child Protection Center',
    description:
      'Clean everyday clothing for children aged 6–12.',
    image:
      'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80',
  },
]

const categories = ['All', 'Books', 'Clothes', "Children's Items"]

const statusConfig = {
  delivered: {
    label: 'Delivered',
    icon: CheckCircle2,
    classes: 'bg-meadow-500/10 text-meadow-600',
  },
  transit: {
    label: 'In Transit',
    icon: Truck,
    classes: 'bg-sky-50 text-sky-600',
  },
  processing: {
    label: 'Processing',
    icon: Clock3,
    classes: 'bg-amber-100 text-amber-600',
  },
}

const categoryIcons = {
  Books: BookOpen,
  Clothes: Shirt,
  "Children's Items": Gift,
}

export default function MyDonations() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedDonation, setSelectedDonation] = useState(null)

  const filteredDonations =
    selectedCategory === 'All'
      ? donations
      : donations.filter(
          (donation) => donation.category === selectedCategory
        )

  const deliveredCount = donations.filter(
    (donation) => donation.statusType === 'delivered'
  ).length

  const transitCount = donations.filter(
    (donation) => donation.statusType === 'transit'
  ).length

  const totalItems = donations.reduce(
    (total, donation) => total + donation.quantity,
    0
  )

  return (
    <div className="min-h-screen bg-mist">

      {/* Header */}

      <header className="sticky top-0 z-30 border-b border-cloudline bg-white/85 backdrop-blur-xl">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

          <div className="flex items-center gap-4">

            <Link
              to="/user-dashboard"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                text-slate-muted
                transition-all
                hover:bg-sky-50
                hover:text-deepsea
              "
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-muted">
                Contributions
              </p>

              <h1 className="font-display text-xl font-extrabold text-ink sm:text-2xl">
                My Donations
              </h1>

            </div>

          </div>

          <Link
            to="/donate"
            className="btn-primary"
          >
            <Gift className="h-4 w-4" />
            <span className="hidden sm:inline">
              Donate an Item
            </span>
            <span className="sm:hidden">
              Donate
            </span>
          </Link>

        </div>

      </header>


      <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">

        {/* Intro */}

        <section className="relative overflow-hidden rounded-3xl bg-deepsea p-6 text-white shadow-soft sm:p-8">

          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-meadow-500/10 blur-3xl" />

          <div className="relative z-10 max-w-2xl">

            <div className="mb-3 flex items-center gap-2 text-sky-200">

              <Sparkles className="h-4 w-4" />

              <span className="text-xs font-semibold uppercase tracking-[0.15em]">
                Your Giving Journey
              </span>

            </div>

            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
              Every donation tells a story.
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-blue-100">
              Track every item you've shared through HopeCloud and see
              how your contributions are making their way to people who
              need them.
            </p>

          </div>

        </section>


        {/* Summary Cards */}

        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <SummaryCard
            icon={Package}
            label="Total Items"
            value={totalItems}
            description="Items contributed"
          />

          <SummaryCard
            icon={Gift}
            label="Donations"
            value={donations.length}
            description="Total contributions"
          />

          <SummaryCard
            icon={CheckCircle2}
            label="Delivered"
            value={deliveredCount}
            description="Reached recipients"
          />

          <SummaryCard
            icon={Truck}
            label="In Transit"
            value={transitCount}
            description="Currently on the way"
          />

        </section>


        {/* Filter */}

        <section className="mt-8">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-muted">
                Donation History
              </p>

              <h2 className="mt-1 font-display text-2xl font-extrabold text-ink">
                Your Contributions
              </h2>

            </div>


            <div className="flex gap-2 overflow-x-auto pb-1">

              {categories.map((category) => (

                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`
                    shrink-0
                    rounded-full
                    px-4
                    py-2
                    text-xs
                    font-bold
                    transition-all
                    duration-200
                    ${
                      selectedCategory === category
                        ? 'bg-deepsea text-white shadow-soft'
                        : 'border border-cloudline bg-white text-slate-muted hover:bg-sky-50 hover:text-deepsea'
                    }
                  `}
                >
                  {category}
                </button>

              ))}

            </div>

          </div>


          {/* Donation Cards */}

          <div className="mt-5 grid gap-5 lg:grid-cols-2">

            {filteredDonations.map((donation) => (

              <DonationCard
                key={donation.id}
                donation={donation}
                onView={() => setSelectedDonation(donation)}
              />

            ))}

          </div>


          {filteredDonations.length === 0 && (

            <div className="mt-5 rounded-3xl border border-dashed border-cloudline bg-white p-12 text-center">

              <Package className="mx-auto h-10 w-10 text-slate-muted" />

              <h3 className="mt-4 font-display text-lg font-bold text-ink">
                No donations found
              </h3>

              <p className="mt-2 text-sm text-slate-muted">
                You don't have any donations in this category yet.
              </p>

            </div>

          )}

        </section>

      </main>


      {/* Details Modal */}

      {selectedDonation && (

        <DonationDetails
          donation={selectedDonation}
          onClose={() => setSelectedDonation(null)}
        />

      )}

    </div>
  )
}


/* Summary Card */

function SummaryCard({
  icon: Icon,
  label,
  value,
  description,
}) {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-cloudline
        bg-white
        p-5
        shadow-card
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-soft
      "
    >

      <div className="flex items-center justify-between">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-5 w-5" />
        </div>

      </div>

      <p className="mt-5 font-display text-3xl font-extrabold text-ink">
        {value}
      </p>

      <p className="mt-1 text-sm font-bold text-ink">
        {label}
      </p>

      <p className="mt-1 text-xs text-slate-muted">
        {description}
      </p>

    </div>
  )
}


/* Donation Card */

function DonationCard({
  donation,
  onView,
}) {
  const StatusIcon = statusConfig[donation.statusType].icon
  const CategoryIcon = categoryIcons[donation.category]

  return (
    <article
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-cloudline
        bg-white
        shadow-card
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-soft
      "
    >

      <div className="flex flex-col sm:flex-row">

        {/* Image */}

        <div className="relative h-56 overflow-hidden sm:h-auto sm:w-52 sm:shrink-0">

          <img
            src={donation.image}
            alt={donation.item}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />

          <div className="absolute left-3 top-3">

            <span
              className={`
                inline-flex
                items-center
                gap-1.5
                rounded-full
                px-3
                py-1.5
                text-[10px]
                font-bold
                backdrop-blur-md
                ${statusConfig[donation.statusType].classes}
              `}
            >
              <StatusIcon className="h-3.5 w-3.5" />
              {donation.status}
            </span>

          </div>

        </div>


        {/* Content */}

        <div className="flex min-w-0 flex-1 flex-col p-5">

          <div className="flex items-start justify-between gap-3">

            <div>

              <div className="flex items-center gap-2">

                <CategoryIcon className="h-4 w-4 text-sky-600" />

                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-muted">
                  {donation.category}
                </span>

              </div>

              <h3 className="mt-2 font-display text-lg font-extrabold text-ink">
                {donation.item}
              </h3>

            </div>

          </div>


          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-muted">
            {donation.description}
          </p>


          <div className="mt-4 grid grid-cols-2 gap-3">

            <InfoItem
              label="Quantity"
              value={`${donation.quantity} items`}
            />

            <InfoItem
              label="Condition"
              value={donation.condition}
            />

          </div>


          <div className="mt-4 flex items-center gap-2 text-[10px] text-slate-muted">

            <MapPin className="h-3.5 w-3.5 text-sky-600" />

            {donation.location}

            <span>•</span>

            {donation.date}

          </div>


          <div className="mt-5 flex items-center justify-between border-t border-cloudline pt-4">

            <button
              onClick={onView}
              className="
                inline-flex
                items-center
                gap-1.5
                text-xs
                font-bold
                text-sky-600
                transition-colors
                hover:text-deepsea
              "
            >
              View Details
              <ArrowRight className="h-3.5 w-3.5" />
            </button>

            {donation.statusType === 'delivered' && (

              <span className="flex items-center gap-1 text-[10px] font-semibold text-meadow-600">
                <Heart className="h-3.5 w-3.5 fill-current" />
                Impact made
              </span>

            )}

          </div>

        </div>

      </div>

    </article>
  )
}


/* Small Info */

function InfoItem({ label, value }) {
  return (
    <div className="rounded-xl bg-mist px-3 py-2">

      <p className="text-[9px] font-bold uppercase tracking-wider text-slate-muted">
        {label}
      </p>

      <p className="mt-0.5 text-xs font-bold text-ink">
        {value}
      </p>

    </div>
  )
}


/* Details Modal */

function DonationDetails({
  donation,
  onClose,
}) {
  const isDelivered = donation.statusType === 'delivered'
  const isTransit = donation.statusType === 'transit'

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-deepsea/30
        p-4
        backdrop-blur-sm
      "
      onClick={onClose}
    >

      <div
        className="
          max-h-[90vh]
          w-full
          max-w-2xl
          overflow-y-auto
          rounded-3xl
          bg-white
          shadow-2xl
        "
        onClick={(event) => event.stopPropagation()}
      >

        {/* Modal Header */}

        <div className="relative">

          <img
            src={donation.image}
            alt={donation.item}
            className="h-56 w-full object-cover sm:h-64"
          />

          <button
            onClick={onClose}
            className="
              absolute
              right-4
              top-4
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-white/90
              text-slate-muted
              shadow-card
              transition-all
              hover:bg-white
              hover:text-ink
            "
          >
            <XCircle className="h-5 w-5" />
          </button>

        </div>


        <div className="p-6 sm:p-8">

          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-muted">
                {donation.category}
              </p>

              <h2 className="mt-1 font-display text-2xl font-extrabold text-ink">
                {donation.item}
              </h2>

            </div>

            <span
              className={`
                inline-flex
                w-fit
                items-center
                gap-1.5
                rounded-full
                px-3
                py-1.5
                text-[10px]
                font-bold
                ${statusConfig[donation.statusType].classes}
              `}
            >
              {(() => {
                const Icon = statusConfig[donation.statusType].icon
                return <Icon className="h-3.5 w-3.5" />
              })()}

              {donation.status}
            </span>

          </div>


          <div className="mt-6 grid gap-3 sm:grid-cols-3">

            <InfoItem
              label="Quantity"
              value={`${donation.quantity} items`}
            />

            <InfoItem
              label="Condition"
              value={donation.condition}
            />

            <InfoItem
              label="Donated On"
              value={donation.date}
            />

          </div>


          {/* Delivery Timeline */}

          <div className="mt-8">

            <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-muted">
              Delivery Journey
            </p>

            <div className="mt-5 space-y-5">

              <TimelineItem
                icon={Package}
                title="Donation Received"
                description="HopeCloud received your donation."
                complete
              />

              <TimelineItem
                icon={CheckCircle2}
                title="Donation Verified"
                description="The item was checked and approved."
                complete
              />

              <TimelineItem
                icon={Truck}
                title="On the Way"
                description={
                  isDelivered
                    ? 'The donation was delivered successfully.'
                    : isTransit
                    ? 'Your donation is currently on its way.'
                    : 'Your donation will move here once processing is complete.'
                }
                complete={isDelivered || isTransit}
                current={isTransit}
              />

              <TimelineItem
                icon={Heart}
                title="Reached Someone in Need"
                description={
                  isDelivered
                    ? `Your donation reached ${donation.recipient}.`
                    : 'This step will update once the item reaches its recipient.'
                }
                complete={isDelivered}
              />

            </div>

          </div>


          {/* Recipient */}

          <div className="mt-7 rounded-2xl bg-mist p-5">

            <div className="flex items-start gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-sky-600 shadow-sm">
                <Heart className="h-5 w-5 fill-current" />
              </div>

              <div>

                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-muted">
                  Recipient / Impact
                </p>

                <p className="mt-1 text-sm font-bold text-ink">
                  {donation.recipient}
                </p>

                <p className="mt-1 text-xs leading-relaxed text-slate-muted">
                  {isDelivered
                    ? 'Your contribution has successfully created a positive impact.'
                    : 'We will update this information when your donation reaches its recipient.'}
                </p>

              </div>

            </div>

          </div>


          <button
            onClick={onClose}
            className="btn-secondary mt-6 w-full"
          >
            Close Details
          </button>

        </div>

      </div>

    </div>
  )
}


/* Timeline */

function TimelineItem({
  icon: Icon,
  title,
  description,
  complete,
  current,
}) {
  return (
    <div className="flex gap-4">

      <div className="relative">

        <div
          className={`
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            ${
              complete
                ? 'bg-meadow-500/10 text-meadow-600'
                : 'bg-mist text-slate-muted'
            }
            ${current ? 'ring-4 ring-sky-50' : ''}
          `}
        >
          <Icon className="h-4 w-4" />
        </div>

      </div>

      <div className="pt-1">

        <p
          className={`
            text-xs
            font-bold
            ${complete ? 'text-ink' : 'text-slate-muted'}
          `}
        >
          {title}
        </p>

        <p className="mt-1 text-[11px] leading-relaxed text-slate-muted">
          {description}
        </p>

      </div>

    </div>
  )
}