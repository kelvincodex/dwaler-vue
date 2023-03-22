<template>
  <AppLayout>
    <main id="content" class="bg-gray space-2">
      <div class="container">
        <div class="row">
            <slot name="card1"></slot>

            <slot name="card2"></slot>
        </div>
      </div>
    </main>
  </AppLayout>
</template>

<script setup>
import AppLayout from "./AppLayout.vue";
import ProcessCount from "../../components/Booking/ProcessCount.vue";
</script>