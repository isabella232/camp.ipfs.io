import React from 'react'
import { withSiteData } from 'react-static'

import { Hero } from 'ipfs-system'
import RandomWord from 'react-random-word'
import { Stars } from '@components/Stars'
import { Box, Heading, Text } from '@components/System'
import { Button } from '@components/Buttons'
import { Logo } from '@components/Logo'
import { Projects } from '@components/Projects'

export default withSiteData(() => (
  <>
    <Hero className="min-vh-95 relative overflow-hidden">
      <Stars className="bg-dark3 skew-l" style={{ top: '-10%' }} />
      <Box className="pa4 pa5-ns lh-copy mw9 center">
        <Box className="mw7 left">
          <Logo
            type="v"
            style={{ minWidth: '220px', width: '20%', height: '15rem' }}
          />
          <Heading
            as="h1"
            fontSize={[5, 7]}
            className="lh-solid pt-mono"
            height="3em"
            style={{ wordWrap: 'break-word' }}
          >
            <RandomWord
              word="Discover an InterPlanetary Future"
              speed={40}
              rounds={30}
              letters="QmcSKzW6SSS2ygfbXHJHtNnDtJd4pHvVHDQUwhiM5FuWkX"
            />
          </Heading>

          <Text className="measure-wide f5 f4-m f3-l" color="neutral2">
            <strong>IPFS Camp</strong> is a{' '}
            <strong>3 day hackers retreat</strong> designed for the{' '}
            <strong>builders</strong> of the <strong>Distributed Web</strong>.
            Join the core developers for a hands on experience packed with
            workshops, lectures and deep-dives.
          </Text>
          <Text className="pv4 pt-mono f4 f3-m f2-l">
            June 27-30, Barcelona
          </Text>
          <Button to="register" size="large">
            Registration Open
          </Button>
        </Box>
      </Box>
    </Hero>
    <section className="bg-white lh-copy dark3 ">
      <div className="pa4 pa5-ns pt0 pt0-ns mw9 center f5 f4-l">
        <div className="flex items-center">
          <div className="w-50-ns">
            <Heading className="lh-title f1 montserrat">What to expect</Heading>
            <p className="f4">
              The event will be packed with moments of knowledge transfer,
              collective brainstorming, pairing with core developers, and
              empowering users and contributors ✨
            </p>
          </div>
          <div className="w-50-ns">
            <Projects className="tc" />
          </div>
        </div>

        <section className="mv4">
          <Heading>Sponsors</Heading>
          <img
            className="mw5"
            src={require('@components/Projects/protocol-labs-logo-horizontal-alt-black.svg')}
          />
          <p>
            Want to Sponsor or get involved? Email{' '}
            <a href="mailto:camp@ipfs.io">camp@ipfs.io</a> to enquire for
            opportunities
          </p>
        </section>
      </div>
    </section>
  </>
))
