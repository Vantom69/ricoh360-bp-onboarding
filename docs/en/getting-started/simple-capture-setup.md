---
title: Simple Capture Setup
description: The easiest way to capture 360 photos in the field. Your operators select an album, press the shutter, and photos upload automatically. No app required.
outline: [2, 3]
---

# Simple Capture Setup

> The easiest way to capture 360 photos in the field. Your operators select an album, press the shutter, and photos upload automatically. No app required.

---

## 1. What Is Simple Capture?

Simple Capture is a plugin installed on the THETA X camera that replaces the standard camera interface with a simplified screen. Instead of navigating camera menus, exposure settings, and transfer options, your field operators see only two things: a list of albums and a shutter button.

The workflow is minimal by design:

1. Select an album on the touchscreen.
2. Press the shutter button.
3. Walk away. Photos upload to the cloud automatically when WiFi is available.

Simple Capture is the primary field workflow for non-technical operators. It removes decision-making from the capture process so that anyone on your team can produce consistent, high-quality 360 documentation without training on camera settings.

> **Go further:** [Business Pack Type S manual](https://support.ricoh360.com/fr/manuals/business-package-type-s) | [Type S plugin reference](https://support.ricoh360.com/fr/tags/bp-type-s-ref-plugin)

---

## 2. What Makes Type S Different

The Business Pack Type S is the variant of the RICOH360 Business Pack designed specifically around Simple Capture. It includes:

- **1 THETA X camera in rental** (the touchscreen is required for album selection)
- **10 user accounts** for your team
- **100 GB cloud storage** per license
- **Ricoh Care** (1 free camera replacement over the contract period)
- **Simple Capture pre-configured** on the camera before delivery

The key difference from Business Pack Core: your THETA X arrives pre-configured with a capture preset and the Simple Capture plugin already installed. The camera is ready for field use out of the box, with no setup required from your operators.

**Important:** Simple Capture is available exclusively on THETA X. It is not available on THETA A1 or THETA Z1. The THETA X touchscreen is essential for the album selection interface.

---

## 3. Initial Setup (Administrator)

Simple Capture configuration is handled before the camera reaches your team. This section explains what happens behind the scenes and what you can control.

### Camera Preset Configuration

Each THETA X running Simple Capture operates with a single capture preset. This preset defines all shooting parameters:

| Parameter | Typical values |
|-----------|---------------|
| Capture mode | Image (or Video, but not both) |
| Image resolution | 11K or 5.5K |
| HDR mode | HDR, HDR Handheld, or Off |
| Timer | 2s, 5s, or Off |
| Exposure compensation | -2.0 to +2.0 (1/3 EV steps) |
| Sleep delay | 3min, 10min, or Off |
| Power-off delay | 12h, 24h, or 48h |

### How the Preset Is Applied

The preset is configured by Ricoh via USB kitting before the camera is shipped to you. This is a physical process using a command-line tool connected to the camera. It cannot be done remotely, and it cannot be done by the customer.

**You get one preset per camera.** If you need to change capture parameters (for example, switching from 11K to 5.5K, or enabling HDR), contact your Ricoh account manager. A preset change requires the camera to be sent back or kitted on-site by Ricoh.

### What You Control as Administrator

While you cannot change the capture preset, you control everything else from the RICOH360 web app:

- **Album assignment:** Which albums appear on this camera's screen (via THETA Management)
- **Auto-delete after upload:** Whether photos are deleted from the camera's SD card after successful cloud transfer (configurable via Twin properties)
- **WiFi networks:** Which networks the camera connects to for auto-upload
- **Firmware updates:** Managed through the web app

> **Go further:** [Type S WLAN settings](https://support.ricoh360.com/fr/tags/bp-type-s-wlan-settings) | [Type S user management](https://support.ricoh360.com/fr/tags/bp-type-s-user-management)

---

## 4. How It Works in the Field (Operator Workflow)

This is the daily workflow. It takes under 30 seconds to start capturing.

### Step 1: Power on the camera

Press and hold the power button. The Simple Capture interface loads automatically. You will see the album list on the touchscreen.

### Step 2: Select the target album

Tap the album where you want your photos to go. Albums are pre-assigned by your administrator, so you will only see the ones relevant to your work (site names, project codes, intervention references, etc.).

### Step 3: Press the shutter button

Hold the camera, press the physical shutter button. The camera captures a full 360 panorama using the pre-configured settings. Repeat for each capture point.

### Step 4: Photos upload automatically

When the camera connects to a saved WiFi network (back at the office, at a site with known WiFi, or via a mobile hotspot), photos upload to the cloud in the background. They appear in the album you selected, visible to your entire team in the RICOH360 web app.

**That is the complete field workflow.** No mobile app is needed for capture. No manual transfer. No settings to adjust.

> **Go further:** [Type S shooting guide](https://support.ricoh360.com/fr/tags/bp-type-s-shooting) | [Type S upload](https://support.ricoh360.com/fr/tags/bp-type-s-upload)
>
> **Video resources (FR):** [Upload to cloud](https://youtu.be/A0VD6f5HSRQ) | [Indoor/outdoor settings](https://youtu.be/ml36-En7UwM)

---

## 5. Album Management (Administrator)

Albums are the organizational backbone of Simple Capture. Each album you assign to a camera becomes a selectable destination on the operator's touchscreen.

### Creating and Assigning Albums

1. In the RICOH360 web app, go to **Albums** and create the albums you need (one per site, per project, per intervention type, whatever matches your workflow).
2. Go to **THETA Management** in the administration panel.
3. Select the camera and assign the relevant albums to it.
4. The albums will appear on the camera's touchscreen the next time it syncs.

### Practical Album Limit

The Simple Capture interface works well with **10 to 15 albums per camera**. Beyond that, the list becomes difficult to navigate on the touchscreen and performance degrades. If you need more than 15 active destinations, consider rotating albums (removing completed ones, adding new ones) rather than accumulating them.

### QR Code / Tag Reader

Simple Capture supports QR code scanning for album selection. If your workflow uses QR codes at capture locations, operators can scan instead of scrolling through the album list. This is particularly useful when the number of albums approaches the practical limit.

> **Go further:** [Type S album settings](https://support.ricoh360.com/fr/tags/bp-type-s-album-settings)
>
> **Video resource (FR):** [Camera management](https://youtu.be/9k1jxIEstcE)

---

## 6. WiFi and Auto-Upload (Administrator)

### How Auto-Upload Works

The THETA X stores captured photos on its internal SD card. When the camera detects a saved WiFi network, it begins uploading photos to the RICOH360 cloud in the background. No user action is required.

You can save multiple WiFi networks on the camera (office, warehouse, site trailer, mobile hotspot). The camera will connect to whichever is available.

### What Happens Without WiFi

If no WiFi is available, photos remain stored locally on the camera's SD card. They are not lost. The next time the camera connects to a saved WiFi network, all pending photos upload automatically.

### Auto-Delete After Upload

You can enable automatic deletion of local files after successful cloud upload. This is configured through the camera's Twin properties in the THETA Management section of the web app. Enabling this keeps the SD card clear and prevents storage issues during long capture campaigns.

> **Go further:** [Type S WLAN settings](https://support.ricoh360.com/fr/tags/bp-type-s-wlan-settings) | [Type S upload](https://support.ricoh360.com/fr/tags/bp-type-s-upload)

---

## 7. Limitations

Be aware of these constraints when planning your Simple Capture deployment:

| Limitation | Detail |
|-----------|--------|
| **THETA X only** | Simple Capture is not available on THETA A1 or THETA Z1. The touchscreen is required. |
| **1 preset per camera** | Capture parameters (resolution, HDR, timer) are fixed at kitting. Changing them requires Ricoh intervention via USB. |
| **10-15 album practical limit** | The touchscreen interface degrades with large album lists. Plan for album rotation. |
| **No video in most deployments** | The preset is configured for either image or video, not both. Most deployments use image mode. |
| **No remote preset changes** | You cannot modify capture settings from the web app. Contact your Ricoh account manager for changes. |
| **USB kitting required** | The camera must be kitted before first use. It cannot be configured by the customer. |
| **No hybrid capture** | You cannot switch between photo and video modes in the field. The preset determines the mode. |

---

## 8. Tips for Field Teams

These recommendations come from real deployments. Share them with your operators.

**Before heading out:**
- Charge the camera fully. A full charge lasts a full day of captures in most scenarios.
- Clean both lenses with a microfiber cloth. Fingerprints and dust show up clearly in 360 panoramas.

**During capture:**
- Select the correct album **before** you start capturing. If photos land in the wrong album, the only fix is to move them manually in the web app after upload.
- Hold the camera at arm's length or on a monopod. This keeps your body out of the center of the panorama.

**After capture:**
- Check the WiFi icon on the camera screen before leaving the site. If you see the connection indicator, uploads are in progress or will begin shortly.
- If you captured at a site with no WiFi, bring the camera within range of a saved network (office, hotspot) to trigger the upload.

---

## 9. What's Next

Once Simple Capture is running, explore these guides to get more from your setup:

- [Hardware Setup](/en/getting-started/hardware-setup): Full THETA X unboxing and physical setup
- [Web App First Steps](/en/getting-started/web-app-first-steps): Navigate the RICOH360 web app, browse your uploaded photos, manage your team
- [Organizing with Albums](/en/daily-use/organizing-with-albums): Album strategies, naming conventions, and best practices
- [Camera Fleet Management](/en/premium-features/camera-fleet-management): Manage multiple cameras, monitor battery and storage remotely, coordinate across sites
