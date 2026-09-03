import { useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Shirt,
  Gift,
  Utensils,
  Package,
  Upload,
  ImagePlus,
  X,
  CheckCircle2,
  Heart,
  MapPin,
  CalendarDays,
  Sparkles,
} from 'lucide-react'

import { Link } from 'react-router-dom'
import { apiUrl } from '../../config/api'

const categories = [
  {
    name: 'Books',
    icon: BookOpen,
    description: 'Books and educational material',
  },
  {
    name: 'Clothes',
    icon: Shirt,
    description: 'Clean and usable clothing',
  },
  {
    name: "Children's Items",
    icon: Gift,
    description: 'Toys, bags and essentials',
  },
  {
    name: 'Food & Essentials',
    icon: Utensils,
    description: 'Food and daily necessities',
  },
  {
    name: 'Other',
    icon: Package,
    description: 'Other useful items',
  },

]
const dropOffLocations = [
  {
    name: 'Gulberg Donation Center',
    address: 'Main Boulevard, Gulberg III, Lahore',
  },
  {
    name: 'Johar Town Donation Center',
    address: 'Block H, Johar Town, Lahore',
  },
  {
    name: 'DHA Donation Center',
    address: 'DHA Phase 5, Lahore',
  },
  {
    name: 'Islamabad Donation Center',
    address: 'Blue Area, Islamabad',
  },
  {
    name: 'Karachi Donation Center',
    address: 'Gulshan-e-Iqbal, Karachi',
  },
]
export default function Donate() {
  const [category, setCategory] = useState('Books')
  const [itemName, setItemName] = useState('')
  const [quantity, setQuantity] = useState('1')
  const [condition, setCondition] = useState('Good')
  const [description, setDescription] = useState('')
  const [deliveryMethod, setDeliveryMethod] = useState('Pickup')
  const [pickupLocation, setPickupLocation] = useState('')
  const [dropOffLocation, setDropOffLocation] = useState('')
  const [date, setDate] = useState('')
  const [notes, setNotes] = useState('')
  const [image, setImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const handleImageChange = (event) => {
    const file = event.target.files?.[0]

    if (!file) return

    setImage(file)

    const previewUrl = URL.createObjectURL(file)
    setImagePreview(previewUrl)
  }

  const removeImage = () => {
    setImage(null)
    setImagePreview(null)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const token = localStorage.getItem('token')

      if (!token) {
        alert('Please login first.')
        return
      }

      const location =
        deliveryMethod === 'Pickup'
          ? pickupLocation
          : dropOffLocation

      const formData = new FormData()

      formData.append('title', itemName)
      formData.append('description', description)
      formData.append('category', category)
      formData.append('condition', condition)
      formData.append('location', location)
      formData.append('quantity', quantity)

      if (date) {
        formData.append('preferred_date', date)
      }

      if (notes) {
        formData.append('notes', notes)
      }

      if (image) {
        formData.append('image', image)
      }

      const response = await fetch(
        apiUrl('/donations'),
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }

      )

      const data = await response.json()

      if (!response.ok) {
        console.log('Donation error:', data)
        alert(data.message || 'Failed to submit donation.')
        return
      }

      console.log('Donation created:', data)

      setSubmitted(true)

    } catch (error) {
      console.error('Donation error:', error)
      alert('Something went wrong. Make sure Laravel is running.')
    }
  }
  if (submitted) {
    return (
      <div className="min-h-screen bg-mist px-5 py-10 sm:px-8 lg:px-10">

        <div className="mx-auto flex min-h-[80vh] max-w-2xl items-center justify-center">

          <div className="w-full rounded-3xl border border-cloudline bg-white p-8 text-center shadow-soft sm:p-12">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-meadow-500/10 text-meadow-600">

              <CheckCircle2 className="h-10 w-10" />

            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-meadow-600">
              Donation Submitted
            </p>

            <h1 className="mt-2 font-display text-3xl font-extrabold text-ink">
              Thank you for giving hope.
            </h1>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-slate-muted">
              Your donation has been submitted successfully. Our team
              will review the details and update you once your item
              begins its journey to someone in need.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                to="/user-dashboard"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-deepsea
                  px-6
                  py-3
                  text-sm
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-sky-600
                  hover:shadow-glow
                "
              >
                Back to Dashboard
                <ArrowRight className="h-4 w-4" />
              </Link>

              <button
                onClick={() => {
                  setSubmitted(false)
                  setItemName('')
                  setQuantity('1')
                  setDescription('')
                  setNotes('')
                  setImage(null)
                  setImagePreview(null)
                }}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-cloudline
                  bg-white
                  px-6
                  py-3
                  text-sm
                  font-bold
                  text-deepsea
                  transition-all
                  hover:bg-sky-50
                "
              >
                Donate Another Item
              </button>

            </div>

          </div>

        </div>

      </div>
    )
  }

  return (
    <div className="min-h-screen bg-mist">

      {/* Header */}

      <header className="border-b border-cloudline bg-white">

        <div className="mx-auto flex max-w-7xl items-center px-5 py-5 sm:px-8 lg:px-10">

          <Link
            to="/user-dashboard"
            className="
              group
              flex
              items-center
              gap-3
              text-sm
              font-semibold
              text-slate-muted
              transition-colors
              hover:text-deepsea
            "
          >

            <span
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-cloudline
                bg-white
                transition-all
                duration-300
                group-hover:-translate-x-1
                group-hover:border-sky-200
                group-hover:bg-sky-50
              "
            >
              <ArrowLeft className="h-5 w-5" />
            </span>

            Back to Dashboard

          </Link>

        </div>

      </header>


      {/* Main */}

      <main className="px-5 py-8 sm:px-8 lg:px-10 lg:py-10">

        <div className="mx-auto max-w-7xl">


          {/* Page Heading */}

          <div className="mb-8">

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-600">

              <Heart className="h-4 w-4 fill-current" />

              Make a Difference

            </div>

            <h1 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">
              Donate an Item
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-muted sm:text-base">
              Give something useful a second life. Share an item with
              someone who genuinely needs it.
            </p>

          </div>


          {/* Main Grid */}

          <div className="grid gap-6 lg:grid-cols-[1fr_360px]">


            {/* Form */}

            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-cloudline bg-white p-6 shadow-card sm:p-8"
            >

              {/* Step 1 */}

              <div>

                <div className="flex items-center gap-3">

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-deepsea text-xs font-bold text-white">
                    01
                  </span>

                  <div>

                    <h2 className="font-display text-lg font-extrabold text-ink">
                      What would you like to donate?
                    </h2>

                    <p className="text-xs text-slate-muted">
                      Select the category that best matches your item.
                    </p>

                  </div>

                </div>


                {/* Categories */}

                <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">

                  {categories.map((item) => {

                    const Icon = item.icon
                    const active = category === item.name

                    return (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => setCategory(item.name)}
                        className={`
                          group
                          rounded-2xl
                          border
                          p-4
                          text-left
                          transition-all
                          duration-300
                          ${active
                            ? 'border-deepsea bg-sky-50 shadow-sm'
                            : 'border-cloudline bg-white hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-50/50'
                          }
                        `}
                      >

                        <div className="flex items-center justify-between">

                          <div
                            className={`
                              flex
                              h-10
                              w-10
                              items-center
                              justify-center
                              rounded-xl
                              ${active
                                ? 'bg-deepsea text-white'
                                : 'bg-mist text-sky-600'
                              }
                            `}
                          >
                            <Icon className="h-5 w-5" />
                          </div>

                          {active && (
                            <CheckCircle2 className="h-4 w-4 text-deepsea" />
                          )}

                        </div>

                        <p className="mt-3 text-sm font-bold text-ink">
                          {item.name}
                        </p>

                        <p className="mt-1 text-[10px] leading-relaxed text-slate-muted">
                          {item.description}
                        </p>

                      </button>
                    )
                  })}

                </div>




              </div>


              {/* Divider */}

              <div className="my-8 border-t border-cloudline" />


              {/* Step 2 */}

              <div>

                <div className="flex items-center gap-3">

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-deepsea text-xs font-bold text-white">
                    02
                  </span>

                  <div>

                    <h2 className="font-display text-lg font-extrabold text-ink">
                      Item Details
                    </h2>

                    <p className="text-xs text-slate-muted">
                      Tell us a little more about your donation.
                    </p>

                  </div>

                </div>


                <div className="mt-5 grid gap-5 sm:grid-cols-2">


                  {/* Item Name */}

                  <div className="sm:col-span-2">

                    <label className="text-xs font-bold text-ink">
                      Item Name
                    </label>

                    <input
                      required
                      type="text"
                      value={itemName}
                      onChange={(e) => setItemName(e.target.value)}
                      placeholder="e.g. Children's story books"
                      className="
                        mt-2
                        w-full
                        rounded-xl
                        border
                        border-cloudline
                        bg-white
                        px-4
                        py-3
                        text-sm
                        text-ink
                        outline-none
                        transition-all
                        focus:border-sky-400
                        focus:ring-4
                        focus:ring-sky-100
                      "
                    />

                  </div>


                  {/* Quantity */}

                  <div>

                    <label className="text-xs font-bold text-ink">
                      Quantity
                    </label>

                    <input
                      required
                      min="1"
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="
                        mt-2
                        w-full
                        rounded-xl
                        border
                        border-cloudline
                        px-4
                        py-3
                        text-sm
                        outline-none
                        focus:border-sky-400
                        focus:ring-4
                        focus:ring-sky-100
                      "
                    />

                  </div>


                  {/* Condition */}

                  <div>

                    <label className="text-xs font-bold text-ink">
                      Condition
                    </label>

                    <select
                      value={condition}
                      onChange={(e) => setCondition(e.target.value)}
                      className="
                        mt-2
                        w-full
                        rounded-xl
                        border
                        border-cloudline
                        bg-white
                        px-4
                        py-3
                        text-sm
                        text-ink
                        outline-none
                        focus:border-sky-400
                        focus:ring-4
                        focus:ring-sky-100
                      "
                    >
                      <option>New</option>
                      <option>Like New</option>
                      <option>Good</option>
                      <option>Used</option>
                    </select>

                  </div>


                  {/* Description */}

                  <div className="sm:col-span-2">

                    <label className="text-xs font-bold text-ink">
                      Description
                    </label>

                    <textarea
                      rows="4"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Describe the item, its condition and anything important the recipient should know..."
                      className="
                        mt-2
                        w-full
                        resize-none
                        rounded-xl
                        border
                        border-cloudline
                        px-4
                        py-3
                        text-sm
                        leading-relaxed
                        text-ink
                        outline-none
                        transition-all
                        placeholder:text-slate-muted
                        focus:border-sky-400
                        focus:ring-4
                        focus:ring-sky-100
                      "
                    />

                  </div>

                </div>

              </div>


              {/* Divider */}

              <div className="my-8 border-t border-cloudline" />


              {/* Step 3 - Image */}

              <div>

                <div className="flex items-center gap-3">

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-deepsea text-xs font-bold text-white">
                    03
                  </span>

                  <div>

                    <h2 className="font-display text-lg font-extrabold text-ink">
                      Add a Photo
                    </h2>

                    <p className="text-xs text-slate-muted">
                      A clear photo helps us understand your donation.
                    </p>

                  </div>

                </div>


                <div className="mt-5">

                  {!imagePreview ? (

                    <label
                      className="
                        flex
                        cursor-pointer
                        flex-col
                        items-center
                        justify-center
                        rounded-2xl
                        border-2
                        border-dashed
                        border-sky-200
                        bg-sky-50/50
                        px-6
                        py-10
                        text-center
                        transition-all
                        duration-300
                        hover:border-sky-400
                        hover:bg-sky-50
                      "
                    >

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-sky-600 shadow-sm">

                        <ImagePlus className="h-7 w-7" />

                      </div>

                      <p className="mt-4 text-sm font-bold text-ink">
                        Upload donation photo
                      </p>

                      <p className="mt-1 text-xs text-slate-muted">
                        PNG, JPG or JPEG · Max 5MB
                      </p>

                      <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-deepsea px-4 py-2 text-xs font-bold text-white">

                        <Upload className="h-3.5 w-3.5" />

                        Choose Image

                      </span>

                      <input
                        type="file"
                        accept="image/png,image/jpeg,image/jpg"
                        onChange={handleImageChange}
                        className="hidden"
                      />

                    </label>

                  ) : (

                    <div className="relative overflow-hidden rounded-2xl border border-cloudline bg-mist">

                      <img
                        src={imagePreview}
                        alt="Donation preview"
                        className="h-64 w-full object-cover"
                      />

                      <button
                        type="button"
                        onClick={removeImage}
                        className="
                          absolute
                          right-3
                          top-3
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          bg-white
                          text-red-500
                          shadow-card
                          transition-all
                          hover:bg-red-50
                        "
                      >
                        <X className="h-4 w-4" />
                      </button>

                      <div className="flex items-center justify-between bg-white px-4 py-3">

                        <div className="flex items-center gap-2">

                          <CheckCircle2 className="h-4 w-4 text-meadow-600" />

                          <span className="text-xs font-semibold text-ink">
                            Photo added
                          </span>

                        </div>

                        <span className="text-[10px] text-slate-muted">
                          {image?.name}
                        </span>

                      </div>

                    </div>

                  )}

                </div>

              </div>


              {/* Divider */}

              <div className="my-8 border-t border-cloudline" />


              {/* Step 4 */}

              <div>

                <div className="flex items-center gap-3">

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-deepsea text-xs font-bold text-white">
                    04
                  </span>

                  <div>

                    <h2 className="font-display text-lg font-extrabold text-ink">
                      Delivery Details
                    </h2>

                    <p className="text-xs text-slate-muted">
                      Choose how your donation should reach us.
                    </p>

                  </div>

                </div>


                {/* Delivery method */}

                <div className="mt-5 grid gap-3 sm:grid-cols-2">

                  {/* Pickup */}

                  <button
                    type="button"
                    onClick={() => {
                      setDeliveryMethod('Pickup')
                      setDropOffLocation('')
                    }}
                    className={`
        rounded-2xl
        border
        p-4
        text-left
        transition-all
        ${deliveryMethod === 'Pickup'
                        ? 'border-deepsea bg-sky-50 shadow-sm'
                        : 'border-cloudline bg-white hover:border-sky-200 hover:bg-sky-50/50'
                      }
      `}
                  >

                    <MapPin
                      className={`
          h-5 w-5
          ${deliveryMethod === 'Pickup'
                          ? 'text-deepsea'
                          : 'text-slate-muted'
                        }
        `}
                    />

                    <p className="mt-3 text-sm font-bold text-ink">
                      Request Pickup
                    </p>

                    <p className="mt-1 text-xs leading-relaxed text-slate-muted">
                      Our team collects the item from your location.
                    </p>

                  </button>


                  {/* Drop Off */}

                  <button
                    type="button"
                    onClick={() => {
                      setDeliveryMethod('Drop-off')
                      setPickupLocation('')
                    }}
                    className={`
        rounded-2xl
        border
        p-4
        text-left
        transition-all
        ${deliveryMethod === 'Drop-off'
                        ? 'border-deepsea bg-sky-50 shadow-sm'
                        : 'border-cloudline bg-white hover:border-sky-200 hover:bg-sky-50/50'
                      }
      `}
                  >

                    <Package
                      className={`
          h-5 w-5
          ${deliveryMethod === 'Drop-off'
                          ? 'text-deepsea'
                          : 'text-slate-muted'
                        }
        `}
                    />

                    <p className="mt-3 text-sm font-bold text-ink">
                      Drop Off
                    </p>

                    <p className="mt-1 text-xs leading-relaxed text-slate-muted">
                      Choose a HopeCloud location to drop off your item.
                    </p>

                  </button>

                </div>


                {/* Pickup OR Drop-off */}

                {deliveryMethod === 'Pickup' ? (

                  <div className="mt-5">

                    <label className="text-xs font-bold text-ink">
                      Pickup Location
                    </label>

                    <div className="relative">

                      <MapPin className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-muted" />

                      <input
                        required
                        type="text"
                        value={pickupLocation}
                        onChange={(e) => setPickupLocation(e.target.value)}
                        placeholder="Enter your complete pickup location"
                        className="
            mt-2
            w-full
            rounded-xl
            border
            border-cloudline
            bg-white
            py-3
            pl-11
            pr-4
            text-sm
            text-ink
            outline-none
            transition-all
            focus:border-sky-400
            focus:ring-4
            focus:ring-sky-100
          "
                      />

                    </div>

                    <p className="mt-1.5 text-[10px] text-slate-muted">
                      Please provide the location where our team can collect your donation.
                    </p>

                  </div>

                ) : (

                  <div className="mt-5">

                    <label className="text-xs font-bold text-ink">
                      Select Drop-off Location
                    </label>

                    <p className="mt-1 text-[10px] text-slate-muted">
                      Choose a convenient HopeCloud location to drop off your item.
                    </p>

                    <div className="mt-3 grid gap-3 sm:grid-cols-2">

                      {dropOffLocations.map((location) => {

                        const active = dropOffLocation === location.name

                        return (
                          <button
                            key={location.name}
                            type="button"
                            onClick={() => setDropOffLocation(location.name)}
                            className={`
                rounded-2xl
                border
                p-4
                text-left
                transition-all
                ${active
                                ? 'border-deepsea bg-sky-50 shadow-sm'
                                : 'border-cloudline bg-white hover:border-sky-200 hover:bg-sky-50/50'
                              }
              `}
                          >

                            <div className="flex items-start gap-3">

                              <div
                                className={`
                    flex h-9 w-9 shrink-0 items-center justify-center rounded-xl
                    ${active
                                    ? 'bg-deepsea text-white'
                                    : 'bg-sky-50 text-sky-600'
                                  }
                  `}
                              >
                                <MapPin className="h-4 w-4" />
                              </div>

                              <div className="min-w-0 flex-1">

                                <div className="flex items-center justify-between gap-2">

                                  <p className="text-xs font-bold text-ink">
                                    {location.name}
                                  </p>

                                  {active && (
                                    <CheckCircle2 className="h-4 w-4 shrink-0 text-deepsea" />
                                  )}

                                </div>

                                <p className="mt-1 text-[10px] leading-relaxed text-slate-muted">
                                  {location.address}
                                </p>

                                <span className="mt-2 inline-flex text-[10px] font-semibold text-sky-600">
                                  View on Map →
                                </span>

                              </div>

                            </div>

                          </button>
                        )

                      })}

                    </div>

                  </div>

                )}


                {/* Date + Notes */}

                <div className="mt-5 grid gap-5 sm:grid-cols-2">

                  {/* Date */}

                  <div>

                    <label className="text-xs font-bold text-ink">
                      Preferred Date
                    </label>

                    <div className="relative">

                      <CalendarDays className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-muted" />

                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="
            mt-2
            w-full
            rounded-xl
            border
            border-cloudline
            bg-white
            py-3
            pl-11
            pr-4
            text-sm
            outline-none
            focus:border-sky-400
            focus:ring-4
            focus:ring-sky-100
          "
                      />

                    </div>

                  </div>


                  {/* Notes */}

                  <div>

                    <label className="text-xs font-bold text-ink">
                      Additional Notes
                    </label>

                    <input
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Anything we should know?"
                      className="
          mt-2
          w-full
          rounded-xl
          border
          border-cloudline
          px-4
          py-3
          text-sm
          outline-none
          focus:border-sky-400
          focus:ring-4
          focus:ring-sky-100
        "
                    />

                  </div>

                </div>

              </div>
              {/* Submit */}

              <div className="mt-8 border-t border-cloudline pt-6">

                <button
                  type="submit"
                  className="
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-deepsea
                    px-6
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-sky-600
                    hover:shadow-glow
                    active:scale-[0.99]
                  "
                >

                  <Heart className="h-4 w-4 fill-current" />

                  Submit Donation

                  <ArrowRight className="h-4 w-4" />

                </button>

                <p className="mt-3 text-center text-[10px] text-slate-muted">
                  Your donation details will be securely reviewed by our team.
                </p>

              </div>

            </form>


            {/* Right Summary */}

            <aside className="space-y-5">


              {/* Impact Card */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-3xl
                  bg-deepsea
                  p-6
                  text-white
                  shadow-soft
                "
              >

                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sky-500/20 blur-3xl" />

                <div className="relative z-10">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">

                    <Sparkles className="h-5 w-5 text-sky-200" />

                  </div>

                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.15em] text-sky-200">
                    Your Impact
                  </p>

                  <h2 className="mt-2 font-display text-xl font-extrabold">
                    Small acts can create big change.
                  </h2>

                  <p className="mt-2 text-xs leading-relaxed text-blue-100">
                    Your donation could become exactly what someone
                    has been waiting for.
                  </p>

                </div>

              </div>


              {/* Summary */}

              <div className="rounded-3xl border border-cloudline bg-white p-6 shadow-card">

                <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-muted">
                  Donation Summary
                </p>

                <div className="mt-5 space-y-4">

                  <div className="flex items-center justify-between">

                    <span className="text-xs text-slate-muted">
                      Category
                    </span>

                    <span className="text-xs font-bold text-ink">
                      {category}
                    </span>

                  </div>

                  <div className="flex items-center justify-between">

                    <span className="text-xs text-slate-muted">
                      Item
                    </span>

                    <span className="max-w-[170px] truncate text-right text-xs font-bold text-ink">
                      {itemName || 'Not specified'}
                    </span>

                  </div>

                  <div className="flex items-center justify-between">

                    <span className="text-xs text-slate-muted">
                      Quantity
                    </span>

                    <span className="text-xs font-bold text-ink">
                      {quantity}
                    </span>

                  </div>

                  <div className="flex items-center justify-between">

                    <span className="text-xs text-slate-muted">
                      Condition
                    </span>

                    <span className="text-xs font-bold text-ink">
                      {condition}
                    </span>

                  </div>

                  <div className="flex items-center justify-between">

                    <span className="text-xs text-slate-muted">
                      Delivery
                    </span>

                    <span className="text-xs font-bold text-ink">
                      {deliveryMethod}
                    </span>

                  </div>

                </div>

              </div>


              {/* Tip */}

              <div className="rounded-3xl border border-sky-100 bg-sky-50/70 p-5">

                <div className="flex items-start gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-sky-600">

                    <Heart className="h-4 w-4 fill-current" />

                  </div>

                  <div>

                    <p className="text-xs font-bold text-ink">
                      Before you donate
                    </p>

                    <p className="mt-1 text-[11px] leading-relaxed text-slate-muted">
                      Please make sure the item is clean, safe and
                      in usable condition.
                    </p>

                  </div>

                </div>

              </div>

            </aside>

          </div>

        </div>

      </main>

    </div>
  )
}