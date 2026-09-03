import { ArrowRight, Heart, Sparkles } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import aboutBg from '../images/about-bg.jpg'
export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        py-20
        sm:py-24
      "
    >
      {/* Background Image aliBaba$$1234*/}
      <div
        className="
    absolute
    inset-0
    bg-cover
    bg-center
  "
        style={{
          backgroundImage: `url(${aboutBg})`,
        }}
      />

      {/* Light Overlay */}
      <div className="absolute inset-0 bg-deepsea/45" />

      {/* Content */}
      <div className="container-max relative z-10">

        <Reveal className="mx-auto max-w-3xl text-center">

          {/* Small Label */}
          <span
            className="
              inline-flex
              items-center
              gap-1.5
              rounded-full
              border
              border-white/15
              bg-white/10
              px-3
              py-1.5
              font-mono
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.15em]
              text-sky-200
            "
          >
            <Sparkles className="h-3 w-3" />
            About HopeCloud
          </span>

          {/* Heading */}
          <h2
            className="
              mt-5
              font-display
              text-3xl
              font-extrabold
              leading-tight
              text-white
              sm:text-4xl
            "
          >
            One Donation Can Make a
            <span className="block text-sky-300">
              Meaningful Difference.
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-relaxed
              text-sky-50/80
              sm:text-base
            "
          >
            HopeCloud is a community donation platform that helps people
            give useful items they no longer need to people who genuinely
            need them. With smart AI matching and verified needs, we make
            donating simple, meaningful, and more impactful.
          </p>

          {/* Simple Highlight */}
          <div className="mt-8 flex justify-center">

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/10
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                backdrop-blur-sm
              "
            >
              <Heart className="h-4 w-4 fill-current text-sky-300" />
              Give what you can. Help where it matters.
            </div>

          </div>

        </Reveal>

      </div>
    </section>
  )
}