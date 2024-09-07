<!--
  <NLink no-prefetch to="/blog" class="navigation_item -nav-link">Blog</NLink>
  <NLink to="/plans" class="navigation_item -nav-link hidden-sm-and-down">Pricing</NLink>
  <NLink to="/catalog" class="navigation_item -nav-link">Catalog</NLink>
  <NLink to="/login" class="navigation_item -nav-link">Log In</NLink>
  <NLink to="/plans" class="navigation_item -cta -button hidden-sm-and-down">Free Signup</NLink>
  <NLink to="/plans" class="navigation_item -cta hidden-md-and-up">Free Signup</NLink>
-->

<script setup language="ts">
const items = [
  {
    icon: 'i-mdi-credit-card',
    shortTitle: 'Pricing',
    title: 'Purchase Plan',
    to: '/plans',
  },
  {
    icon: 'i-mdi-book-multiple',
    shortTitle: 'Blog',
    title: 'Book Snapshots',
    to: '/blog',
  },
  {
    icon: 'i-mdi-account-box',
    shortTitle: 'Account',
    title: 'Account Details',
    to: '/account',
  },
  {
    icon: 'i-mdi-message',
    shortTitle: 'Contact',
    title: 'Contact Us',
    to: '/contact',
  },
  {
    icon: 'i-mdi-logout',
    shortTitle: 'Log out',
    title: 'Log out',
    action: () => {
      // if (process.client)
      //   window.location.href = '/'
    },
  },
]
</script>

<template>
  <header flex items-center h-12 lg-h-16 bg-white>
    <Section>
      <Logo />
      <nav>
        <HeaderLink v-for="item in items" :key="item.title" :data="item" />
      </nav>
    </Section>
  </header>
</template>
