# Book My Show Application clone

Pages
    >> Home.Page.jsx(Default.Hoc.jsx)
    >> Movie.Page.jsx(MOvie.Hoc.jsx)
    >> Play.Page.jsz(Default.Hoc.jsx)

HOCs/Layouts:
    >> Defaults.Hoc.jsx
    >> Movie.Hoc.jsx

Components(folders):        Components:
    >>Cast
    >>Entertainment         EntertainmentCard.Component.jsx
    >>HeroCarousel          HeroCarousel.Compoment.jsx

    >> MovieHero            MovieHero.component.jsx
                            MovieInfo.Component.jsx
    >>Navbar                Navbar.Component.jsx
                            MOvieNavbar.Componentsl.jsx
    >>PaymentModel          PaymentComponent.jsx
    >>PlayFilters           Filters.Component.jsx
    >>Poster                Poster.Component.jsx
    >>PosterSlider          PosterSliderComponents.jsx 

we will use vite to create react app
    npm create vite@latest my-project

install tailwindcss
    npm install tailwindcss @tailwindcss/vite

update vite.config.ts
    import tailwindcss from '@tailwindcss/vite'
    add ' tailwindcss()' to the plugins

import tailwaindcss in main css file (index.css)
    @import "tailwindcss";

install react-slick for carousel
    npm install slick-carousel

import to App.js
    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";

since we need apis we will need axios
    npm i axios

for other styling we can use headlessui
    npm install @headlessui/react

install react-icons
    npm install react-icons

install react-router-dom for browserRouter
    npm i react-router-dom

vs-code extentions:
    - Auto import
    - Auto export
    - Auto complete tag
    - ES7+ React/Redux/React-Native snippets
    - Tailwind Css intellisence
