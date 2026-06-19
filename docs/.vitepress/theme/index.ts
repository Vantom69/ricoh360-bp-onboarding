import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { h } from 'vue'
import './custom.css'
import './components/v2.css'

import JourneyStep from './components/JourneyStep.vue'
import CameraSelector from './components/CameraSelector.vue'
import VideoPlaceholder from './components/VideoPlaceholder.vue'
import ImagePlaceholder from './components/ImagePlaceholder.vue'
import Accordion from './components/Accordion.vue'
import Card from './components/Card.vue'
import CardGrid from './components/CardGrid.vue'
import QRCodePair from './components/QRCodePair.vue'
import CloudFlowDiagram from './components/CloudFlowDiagram.vue'
import FAQItem from './components/FAQItem.vue'
import SupportLink from './components/SupportLink.vue'
import JourneyProgress from './components/JourneyProgress.vue'
import JourneyTracker from './components/JourneyTracker.vue'
import SuccessMessage from './components/SuccessMessage.vue'
import SidebarTracker from './components/SidebarTracker.vue'
import PermissionsBlock from './components/PermissionsBlock.vue'

export default {
  extends: DefaultTheme,
  // Layout custom : injecte la jauge de progression au-dessus de la nav sidebar
  // + SidebarTracker invisible qui marque les items du menu avec ✓/●/○
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      'sidebar-nav-before': () => h(JourneyProgress),
      'layout-top': () => h(SidebarTracker),
    }),
  enhanceApp({ app }) {
    app.component('JourneyStep', JourneyStep)
    app.component('CameraSelector', CameraSelector)
    app.component('VideoPlaceholder', VideoPlaceholder)
    app.component('ImagePlaceholder', ImagePlaceholder)
    app.component('Accordion', Accordion)
    app.component('Card', Card)
    app.component('CardGrid', CardGrid)
    app.component('QRCodePair', QRCodePair)
    app.component('CloudFlowDiagram', CloudFlowDiagram)
    app.component('FAQItem', FAQItem)
    app.component('SupportLink', SupportLink)
    app.component('JourneyTracker', JourneyTracker)
    app.component('SuccessMessage', SuccessMessage)
    app.component('PermissionsBlock', PermissionsBlock)
  },
} satisfies Theme
