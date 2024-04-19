---
theme: ./theme
titleTemplate: "A look at tomorrow: the future of React"
background: /covers/mosi-knife--PVgDgKXgZA-unsplash.jpg
class: text-center
highlighter: shiki
monaco: false
lineNumbers: true
favicon: https://delicious-insights.com/apple-touch-icon.png
fonts:
  sans: PT Sans
  serif: PT Sans

info: |
  ## A look at tomorrow: the future of React

  A talk by [Christophe Porteneuve](https://www.linkedin.com/in/christopheporteneuve/) at [React Connection 2024](https://reactconnection.io/).
drawings:
  persist: false
  syncAll: false
css: unocss
---

# A look at tomorrow: the future of React

A talk by [Christophe Porteneuve](https://www.linkedin.com/in/christopheporteneuve/) at [React Connection 2024](https://reactconnection.io/)

---

# `whoami`

```js
const christophe = {
  family: { wife: "👩🏻‍🦰 Élodie", sons: ["👦🏻 Maxence", "👦🏻 Elliott"] },
  city: "Paris, FR",
  company: {
    name: "Doctolib",
    hiring: true,
    superCool: true
  },
  webDevSince: 1995,
  reactSince: 2014,
  mightBeKnownFor: [
    "Prototype.js",
    "dotJS",
    "Paris Web",
    "NodeSchool Paris",
    "React Docs (FR)",
  ],
};
```

---

# 🚀 Rising: **RSC**

React Server Components will continue to grow in adoption, and iron out the most aggravating quirks or trade-offs they currently have.

More frameworks will fully support them (e.g. Remix, RedwoodJS…)

This will be helped by stabilization of the related APIs (e.g. `useFormStatus()`), that feel not quite dry yet.

We'll also see increased usage of related recent features such as Asset Loading.

<Footnote>

(I would wish they align more closely with the Web Platform and reinvent less of the wheel, but I'm not holding my breath.)

</Footnote>

---

# 🚀 Rising: **Full-stack type safety**

With the unstoppingly-growing popularity of TypeScript, people expect more and more type-safety propagation to their entire codebase, whilst staying DRY.

Whether it's through derivation of types from another source (JSON schema, GraphQL schema, Zod validator…) or dedicated approaches like tRPC, you'll see more and more type propagation between the client and the server side.

---

# 🚀 Rising: **async / concurrent** behaviors

There is still plenty of room for wider use of Concurrent Mode features, chief of which are Suspense and [Transitions](https://react.dev/reference/react/useTransition), which are not as used as they should be.

Aside from this, [`use(Promise)`](https://react.dev/reference/react/use#use), especially as it is exempted from the Rules of Hooks, opens the way to delightful async orchestration within our render functions.

---

# 🔥 New: **React Compiler!**

*(f.k.a. React Forget)*

**Memoization, I swear.** And it's only just one of the perks we've been missing out on due to the no-compiler approach React has been following.

Getting memoization right is **hard**.  It quickly creates a lot of noise and overhead in our code, and doesn't necessarily work just right even with that.

The promise of automagic memoization is alluring. Be warned though: it might get there *after* React 19, not *with* it. Still, let's hope for 2024.

<Footnote>

I'm just as excited about the other perks that a compiler pass make possible, by the way.

</Footnote>

---

# 🔥 New: Much-**faster JSX** instantiation

Did you see [this](https://github.com/facebook/react/pull/28768)?

A significant share of the rendering cost has always been JSX element instantiation, in no small part because of props cloning.

But with React Compiler, "special" props such as `key` and `ref` are mostly handled another way in the compiled version, which means it can almost always avoid props cloning.

This is expected to noticeably add up for non-trivial render trees.

---

# 💀 Old: Finally the **end of Enzyme**? 🤣

Ah, I wish!

**Thank you, Enzyme**, for having been there early on.  You were a lot nicer than the early react-test-renderer landscape, and I did teach you in training back in the day.

You've also **ruined** our `npm install`s (hello `--legacy-peer-deps`!) and **tightly coupled** our test code to our components' **implementation details** for *ages*.

**React Testing Library** and **Playwright** (or Cypress, if you're that kind of person) are where it's at, you betcha.

But judging by how hard Enzyme test code seems to be clinging to codebases, I'm afraid news of its death are still greatly exaggerated. It's but a wraith, but it's still there.

---

# 🤔 Still: no clear winner for **CSS-in-JS**

They come and go.  There's **so many** of them.

**Utility classes** have been obviating some of the need for app code.

People are also belatedly discovering that simple **CSS Modules** are often all they need, even for design systems.

And **RSC** has made CSS-in-JS [harder](https://www.joshwcomeau.com/react/css-in-rsc/) all over again *(but [zero-runtime](https://www.joshwcomeau.com/react/css-in-rsc/#the-world-of-zero-runtime-css-in-js-libraries-5) is here to help; I personally like [Panda CSS](https://panda-css.com/))*.

Truth is, there are many, many valid ways to style your React apps. In truth, **it depends™**.

Stay tuned.

---
layout: cover
background: /covers/mosi-knife--PVgDgKXgZA-unsplash.jpg
---

# 🙏🏻 Thank you! 😊

These slides are at [`bit.ly/reactcc-future`](https://bit.ly/reactcc-future).

Christophe: [`@porteneuve`](https://twitter.com/porteneuve) / [`@porteneuve@piaille.fr`](https://piaille.fr/@porteneuve) / [LinkedIn](https://www.linkedin.com/in/christopheporteneuve/)

<div class="mt-8 text-sm" style="opacity: 0.5">

Photo credits:
Cloudy blue sky by <a href="https://unsplash.com/@mosiknife?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">mosi knife</a>, through <a href="https://unsplash.com/fr/s/photos/react?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>.

</div>
