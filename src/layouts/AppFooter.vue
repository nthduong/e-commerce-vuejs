<script setup>
import LogoMain from '@/components/common/LogoMain.vue'

</script>

<template>
  <div class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__row">
          <div class="footer__col">
            <LogoMain />
            
            <p class="footer__desc">
              Food, drinks, groceries, and more available for delivery and pickup.
            </p>
            <div class="footer__socials">
              <a href="#!" class="footer__social-link"
                ><img src="@/assets/icons/facebook.svg" alt="facebook" class="footer__social-icon"
              /></a>
              <a href="#!" class="footer__social-link"
                ><img src="@/assets/icons/linkedin.svg" alt="facebook" class="footer__social-icon"
              /></a>
              <a href="#!" class="footer__social-link"
                ><img src="@/assets/icons/twitter.svg" alt="twitter" class="footer__social-icon"
              /></a>
              <a href="#!" class="footer__social-link"
                ><img
                  src="@/assets/icons/instagram.svg"
                  alt="instagram"
                  class="footer__social-icon"
              /></a>
            </div>
          </div>
          <div class="footer__col">
            <h3 class="footer__heading">Get Started</h3>
            <ul class="footer__list">
              <li class="footer__item"><a href="#!" class="footer__link">FoodEats Sign In</a></li>
              <li class="footer__item"><a href="#!" class="footer__link">FoodEats Sign Up</a></li>
              <li class="footer__item"><a href="#!" class="footer__link">Become a Rider</a></li>
              <li class="footer__item"><a href="#!" class="footer__link">Become a Partner</a></li>
            </ul>
          </div>
          <div class="footer__col">
            <h3 class="footer__heading">Get Help</h3>
            <ul class="footer__list">
              <li class="footer__item"><a href="#!" class="footer__link">Resources</a></li>
              <li class="footer__item"><a href="#!" class="footer__link">Support</a></li>
              <li class="footer__item"><a href="#!" class="footer__link">Become a Rider</a></li>
            </ul>
          </div>
          <div class="footer__col">
            <h3 class="footer__heading">Company</h3>
            <ul class="footer__list">
              <li class="footer__item"><a href="#!" class="footer__link">About Us</a></li>
              <li class="footer__item"><a href="#!" class="footer__link">Customer Rights</a></li>
              <li class="footer__item"><a href="#!" class="footer__link">Career</a></li>
              <li class="footer__item"><a href="#!" class="footer__link">Press</a></li>
              <li class="footer__item"><a href="#!" class="footer__link">Blog</a></li>
            </ul>
          </div>
          <div class="footer__col">
            <h3 class="footer__heading">FootEats For</h3>
            <ul class="footer__list">
              <li class="footer__item"><a href="#!" class="footer__link">Enterprise</a></li>
              <li class="footer__item"><a href="#!" class="footer__link">For Small Business</a></li>
              <li class="footer__item"><a href="#!" class="footer__link">Personal</a></li>
              <li class="footer__item"><a href="#!" class="footer__link">Riders</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';

.footer {
  background: var(--color-bg-primary);
  padding: 100px 0;

  @include abstracts.screen(md) {
    padding: 50px 0;
  }

  &__row {
    display: grid;
    grid-template-columns: 2.5fr 1fr 1fr 1fr 1fr;
    gap: 70px;

    @include abstracts.screen(xxl) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      gap: 50px;
    }

    @include abstracts.screen(xl) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      gap: 30px;
    }

    @include abstracts.screen(lg) {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }

  &__desc {
    margin-top: 12px;
    width: 270px;
    color: var(--color-text-desc);
    line-height: 175%;
  }

  &__socials {
    margin-top: 20px;
    display: flex;
    gap: 16px;
  }

  &__social-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 4px;
    background: var(--color-text-heading);
    transition: background 0.3s;

    &:hover {
      background: var(--color-button-bg);
    }
  }

  &__heading {
    color: var(--color-text-heading);
    font-size: 2rem;
    font-weight: 700;
    line-height: 150%;
  }

  &__list {
    margin-top: 24px;
  }

  &__item + .footer__item {
    margin-top: 16px;
  }

  &__link {
    color: var(--color-text-desc);
    line-height: 175%;

    &:hover {
      color: var(--color-button-bg);
    }
  }
}
</style>
