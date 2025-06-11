'use client';

import React, { useRef } from "react";
import {
  Heading,
  Flex,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Grid,
  Icon,
} from "@/once-ui/components";
import { baseURL, routes } from "@/app/resources";
import { home, about, person, newsletter } from "@/app/resources/content";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { Projects } from "@/components/work/Projects";
import NowPlaying from "@/components/SpotifyNowPlaying";
import GitHubActivity from "@/components/GitHubActivity";
import NeuralNetworkCanvas from "@/components/NeuralNetworkCanvas";

export default function HomePageClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const card5Ref = useRef<HTMLDivElement>(null);

  return (
    <Column gap="xl" horizontal="center">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            publisher: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <div style={{ position: "relative" }}>
        <Grid ref={containerRef} columns="5" mobileColumns="2" fillWidth gap="m" style={{ marginBottom: "var(--space-l)"}}>
          {/* Spotify Card */}
          <Flex ref={card1Ref} direction="column" gap="s" padding="m" radius="l" background="surface" border="neutral-alpha-medium" style={{minHeight: '10rem', zIndex: 1}}>
            <Text variant="label-strong-s" onBackground="neutral-weak">
              Now playing
            </Text>
            <NowPlaying />
          </Flex>
          {/* GitHub Card */}
          <Flex ref={card2Ref} direction="column" gap="s" padding="m" radius="l" background="surface" border="neutral-alpha-medium" style={{minHeight: '10rem', zIndex: 1}}>
            <Text variant="label-strong-s" onBackground="neutral-weak">
              GitHub Activity
            </Text>
            <GitHubActivity />
          </Flex>
          {/* Contact Card */}
          <Flex ref={card3Ref} direction="column" gap="s" padding="m" radius="l" background="surface" border="neutral-alpha-medium" style={{minHeight: '10rem', zIndex: 1}}>
            <Icon name="send" size="l" onBackground="neutral-weak" />
            <Heading as="h2" variant="heading-strong-s">
              Get in touch
            </Heading>
            <Button href="/contact" variant="secondary" size="s">
              Contact
            </Button>
          </Flex>
          {/* Latest Project Card */}
          <Flex ref={card4Ref} direction="column" gap="s" padding="m" radius="l" background="surface" border="neutral-alpha-medium" style={{minHeight: '10rem', zIndex: 1}}>
            <Icon name="folder" size="l" onBackground="neutral-weak" />
            <Heading as="h2" variant="heading-strong-s">
              Latest Project
            </Heading>
            <Button href="/work" variant="secondary" size="s">
              View
            </Button>
          </Flex>
          {/* Latest Blog Card */}
          <Flex ref={card5Ref} direction="column" gap="s" padding="m" radius="l" background="surface" border="neutral-alpha-medium" style={{minHeight: '10rem', zIndex: 1}}>
            <Icon name="post" size="l" onBackground="neutral-weak" />
            <Heading as="h2" variant="heading-strong-s">
              Latest Blog
            </Heading>
            <Button href="/blog" variant="secondary" size="s">
              Read
            </Button>
          </Flex>
        </Grid>
        <NeuralNetworkCanvas containerRef={containerRef} cardRefs={[card1Ref, card2Ref, card3Ref, card4Ref, card5Ref]} />
      </div>
      
      <Flex fillWidth gap="xl">
        <Column as="section" fillWidth paddingY="l" gap="m">
          <Column maxWidth="s" gap="m">
            <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="m">
              <Heading wrap="balance" variant="display-strong-m">
                {home.headline}
              </Heading>
            </RevealFx>
            <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="m">
              <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-l">
                {home.subline}
              </Text>
            </RevealFx>
            <RevealFx translateY="12" delay={0.4} horizontal="start">
              <Button
                id="about"
                data-border="rounded"
                href="/about"
                variant="secondary"
                size="m"
                arrowIcon
              >
                <Flex gap="8" vertical="center">
                  {about.avatar.display && (
                    <Avatar
                      style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                      src={person.avatar}
                      size="m"
                    />
                  )}
                  {about.title}
                </Flex>
              </Button>
            </RevealFx>
          </Column>
        </Column>

        <Column gap="m" style={{ minWidth: "20rem" }}>
          {/* AI Chat Card */}
          <RevealFx translateY="12" delay={0.3}>
            <Flex direction="column" gap="s" padding="m" radius="l" background="surface" border="neutral-alpha-medium">
              <Flex vertical="center" gap="s">
                <Icon name="sparkle" size="m" onBackground="neutral-weak" />
                <Heading as="h2" variant="heading-strong-s">
                  Chat with me
                </Heading>
              </Flex>
              <Text onBackground="neutral-weak" size="s">
                Ask my AI assistant anything about me.
              </Text>
              <Button href="/chat" variant="secondary" size="s" suffixIcon="arrowRight">
                Start chatting
              </Button>
            </Flex>
          </RevealFx>
        </Column>
      </Flex>
      
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
} 