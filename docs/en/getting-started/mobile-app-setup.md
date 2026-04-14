---
title: Mobile App Setup
description: Install the RICOH360 app, pair your camera, and learn what you can do from your phone.
outline: [2, 3]
---

# Mobile App Setup

> Install the RICOH360 app, pair your camera, and learn what you can do from your phone.

---

## 1. Download and Install

The RICOH360 app is available on both platforms:

- **iOS:** Search "RICOH360" on the App Store (requires iOS 16 or later).
- **Android:** Search "RICOH360" on Google Play (requires Android 11 or later).

The app is free to download. You need a RICOH360 account (provided with your Business Pack) to log in.

**Practical tip:** Make sure your phone has Bluetooth and WiFi capabilities. Most smartphones from the last five years will work fine.

**Go further:**
- Helpcenter: [App initial setup](https://support.ricoh360.com/fr/tags/ricoh360-app-prepare)
- Video: [MasterClass 1/14 - Introduction](https://youtu.be/gWGhXz-03t8) (FR)

---

## 2. First Login

1. **Open the app** and tap "Log in."
2. **Enter your credentials.** Use the email and password provided during your Business Pack onboarding. If this is your first login, you may be asked to set a new password.
3. **Select your team.** If your account belongs to multiple teams, select the one you want to work with. Most users will see only one team.
4. **Allow permissions.** The app will ask for access to Bluetooth, WiFi (location services on some devices), and camera. Grant all of them. The app needs these to communicate with your THETA camera.

You are now on the app home screen, ready to connect a camera.

![Mobile app team selector showing Business Pack subscription](/images/mobile/team_selector.png)

**Go further:**
- Helpcenter: [App settings](https://support.ricoh360.com/fr/tags/ricoh360-app-settings)

---

## 3. Connecting to Your Camera

This is the step that matters most. The RICOH360 app connects to your THETA camera using a combination of Bluetooth and WiFi.

### Step-by-step

1. **Power on your THETA camera.**
2. **In the app**, tap the camera connection icon (top of the screen).
3. **The app searches via Bluetooth** for nearby THETA cameras. Make sure Bluetooth is enabled on both your phone and the camera.
4. **Select your camera** from the list. It will appear with its serial number (printed on the bottom of the camera body).
5. **The app establishes a WiFi connection** to the camera. Your phone will temporarily disconnect from your regular WiFi network and connect to the camera's own WiFi network instead.
6. **Once connected**, you will see a live preview of what the camera sees.

![Camera detail screen showing model, serial number, and settings](/images/mobile/camera_detail.png)

### Common issues and field-tested solutions

| Problem | What is happening | Solution |
|---------|-------------------|----------|
| Phone keeps dropping the camera connection | Your phone is jumping back to a saved WiFi network that has internet access. This is the most common issue on busy sites. | Before starting a capture session, go to your phone's WiFi settings and disable auto-join on all other saved networks. This prevents your phone from switching away from the camera's network. |
| Camera does not appear in the Bluetooth list | Bluetooth is off on the camera, or the camera is paired to a different phone | On the THETA X, swipe down on the touchscreen and confirm Bluetooth is enabled. If the camera was previously paired with another phone, unpair it first. |
| "No internet" warning on phone | This is normal and expected. The camera's WiFi network does not provide internet access. | Dismiss the warning. On some Android phones, tap "Stay connected" or "Keep WiFi connection" when prompted. |
| Connection works but live preview is slow or choppy | WiFi interference from other networks on the same channel, common on construction sites with multiple access points | Move away from other routers or access points. If possible, use the 5 GHz band (THETA A1 supports both 2.4 GHz and 5 GHz). |

**Field tip from real deployments:** On active construction sites, operators typically have 3 to 4 WiFi networks saved on their phone (site office, personal hotspot, client network). The phone constantly tries to reconnect to a network with internet, which breaks the camera connection mid-session. The single most effective fix is to forget or disable auto-join for all other networks before you start capturing. It takes 30 seconds and saves significant frustration.

**Go further:**
- Helpcenter: [Connecting smartphone and camera](https://support.ricoh360.com/fr/manual/x-ricoh360-app-connection-01) | [App connection guides](https://support.ricoh360.com/fr/tags/ricoh360-app-connection-theta)
- Helpcenter FAQ: [WiFi connection issues](https://support.ricoh360.com/fr/faq/ricoh360-app-connection-001)
- Video: [MasterClass 2/14 - Cameras](https://youtu.be/nmXo5zTguvE) (FR) | [MasterClass 4/14 - Camera management](https://youtu.be/9k1jxIEstcE) (FR)

---

## 4. Configuring WiFi on the Camera

Your camera needs its own WiFi connection to upload photos to the RICOH360 Cloud. This is separate from the phone-to-camera connection described above.

### Adding a WiFi network

1. In the mobile app, go to **camera settings** (gear icon while connected to the camera).
2. Select **WiFi configuration**.
3. Enter the network name (SSID) and password for the WiFi network available at your site.
4. Save. The camera will attempt to connect.

You can save multiple WiFi networks. This is useful if your team works across different sites. The camera will automatically connect to whichever saved network is available.

### Captive portal limitation

Many corporate and hotel networks use a captive portal (a web page that appears asking you to accept terms or enter a code before granting access). **The THETA cameras cannot interact with captive portals.** They have no web browser.

If your site uses a captive portal, ask your IT team for one of these alternatives:
- A network with standard WPA2 password authentication (no portal)
- A MAC address whitelist for the camera
- A mobile hotspot from a phone as a temporary workaround

**Field tip:** Battery drains faster when the camera is actively searching for or connected to WiFi, especially if GPS and Bluetooth are also running. If you are doing a long capture session and do not need immediate cloud upload, you can configure WiFi later and upload in batch at the end of the day.

**Go further:**
- Helpcenter FAQ: [WiFi connection issues](https://support.ricoh360.com/fr/faq/ricoh360-app-connection-001)
- Helpcenter: [App settings](https://support.ricoh360.com/fr/tags/ricoh360-app-settings)

---

## 5. Taking Photos and Videos

Once your phone is connected to the camera, the app becomes your remote control.

### Capture controls

| Control | What it does |
|---------|-------------|
| **Shutter button** | Tap to capture a 360 photo or start/stop a video recording |
| **Live preview** | Real-time view of what the camera sees, displayed on your phone screen |
| **Timer** | Set a 2-second or 5-second delay before the shutter fires. Gives you time to step away from the camera. |
| **Resolution** | Choose between 11K (maximum detail) and 5.5K (smaller files, faster upload) |
| **HDR mode** | Enable HDR or HDR Handheld for scenes with mixed lighting (bright windows and dark corners) |
| **Exposure compensation** | Adjust brightness up or down if the auto-exposure is not ideal |

### Practical recommendations

- **Use the timer.** Always set at least a 2-second timer so you can step back. Standing right next to the camera will put your body prominently in the panorama.
- **Use the monopod.** Extend it fully and hold the camera at arm's length above your head, or place it on the floor for a stable shot.
- **Check the live preview before each shot.** It takes 3 seconds and helps you avoid capturing with a finger over the lens or in a poor position.

![Capture screen with 11K resolution, shutter controls, and exposure settings](/images/mobile/capture_screen.jpg)

**Go further:**
- Helpcenter: [Capturing with the app](https://support.ricoh360.com/fr/tags/ricoh360-app-capture) | [Preview images](https://support.ricoh360.com/fr/tags/ricoh360-app-preview-image)

---

## 6. Transferring to the Cloud

After capturing, your photos are stored locally on the camera. You need to transfer them to the RICOH360 Cloud so your team can access them from the web app.

### Manual upload

1. In the mobile app, go to the **transfer** section.
2. Select the photos you want to upload (or select all).
3. Tap **Upload to Cloud**.
4. The camera sends the files through its WiFi connection to the RICOH360 Cloud. Upload speed depends on your network. A single 11K panorama typically takes 10 to 30 seconds on a standard connection.

### Auto-upload

If your camera is connected to a saved WiFi network, you can enable automatic upload. New captures are sent to the cloud as soon as WiFi is available, without manual intervention.

![Cloud tab showing uploaded panoramas](/images/mobile/cloud_gallery.png)

### Simple Capture (THETA X only)

If your Business Pack is a Type S with Simple Capture enabled, the workflow is even simpler. The camera screen shows only album selection and a shutter button. Photos are uploaded to the assigned album automatically when the camera connects to WiFi. No app interaction is needed for the transfer. See the [Simple Capture Setup](/en/getting-started/simple-capture-setup) guide for details.

**Go further:**
- Helpcenter: [Upload and share](https://support.ricoh360.com/fr/tags/ricoh360-app-upload-and-share)
- Video: [MasterClass 3/14 - Upload to cloud](https://youtu.be/A0VD6f5HSRQ) (FR)

---

## 7. Firmware Updates

Keep your camera firmware up to date. Updates fix bugs, improve stability, and sometimes add new features.

### How to check and install

1. Connect to your camera via the mobile app.
2. The app will notify you if a new firmware version is available.
3. Make sure the camera has at least **50% battery** before starting.
4. Tap the update prompt and follow the on-screen instructions.
5. **Do not power off the camera during the update.** The camera will restart automatically when the update is complete.

Firmware updates can also be monitored from the RICOH360 web app under **Administration > THETA Management**, where admins can see firmware versions across all registered cameras.

**Go further:**
- Helpcenter: [Firmware update](https://support.ricoh360.com/fr/tags/ricoh360-app-firm-update)
- Video: [MasterClass 5/14 - Firmware update](https://youtu.be/jxDboxjp_v4) (FR)

---

## 8. What is Different on Mobile vs Web

The mobile app is designed for **capture and transfer**. The web app at [ricoh360.com](https://ricoh360.com) is where you manage, organize, and collaborate.

| Feature | Mobile App | Web App |
|---------|:----------:|:-------:|
| Camera connection and remote trigger | Yes | No |
| Live preview | Yes | No |
| Photo/video capture | Yes | No |
| Transfer to cloud | Yes | No |
| WiFi and firmware management | Yes | Limited (firmware monitoring only) |
| View 360 photos | Yes (basic) | Yes (full Viewer with filmstrip) |
| Albums: create and organize | No | Yes |
| Projects and floor plans | No | Yes |
| Annotations and drawing | No | Yes |
| Side-by-side comparison | No | Yes |
| AI processing (enhancement, blur) | No | Yes |
| Team administration | No | Yes |
| Sharing via public link | No | Yes |

**In short:** Use your phone in the field to capture and upload. Use your computer to organize, annotate, compare, and share.

**Go further:**
- Helpcenter: [App connection guides](https://support.ricoh360.com/fr/tags/ricoh360-app-connection-theta)

---

## 9. Next Steps

Your mobile app is set up and connected to your camera. Here is where to go from here:

- **Take your first photo and upload it.** Follow the [Quick Start Guide](/en/getting-started/quick-start-guide) for a complete walkthrough.
- **Learn more about your camera hardware.** See the [Hardware Setup](/en/getting-started/hardware-setup) guide for charging, LED indicators, accessories, and care.
- **Explore the web app.** See [Web App First Steps](/en/getting-started/web-app-first-steps) for albums, projects, and the 360 Viewer.
- **Using Simple Capture?** See [Simple Capture Setup](/en/getting-started/simple-capture-setup) for the guided camera-only workflow.

If you run into connectivity issues, check the troubleshooting table in Section 3 above, or see the [Connectivity Issues](/en/troubleshooting/connectivity-issues) guide.

---

*Your Business Pack includes 10 user accounts per license. Once your camera is connected, invite your team from the web app so everyone can access the same 360 content.*
