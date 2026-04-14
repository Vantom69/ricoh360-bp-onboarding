---
title: Connectivity Issues
description: Troubleshooting guide for WiFi, Bluetooth, and upload problems with RICOH THETA cameras and the RICOH360 platform.
outline: [2, 3]
---

# Connectivity Issues - Troubleshooting Guide

> This guide covers WiFi, Bluetooth, and upload problems with RICOH THETA cameras and the RICOH360 platform. Many of these solutions come from real feedback during field deployments. WiFi connectivity is the most common issue reported by field teams, and most problems have straightforward fixes.

---

## Phone Can't Find Camera WiFi

| Symptom | Likely cause | Solution |
|---------|-------------|----------|
| Camera WiFi network does not appear in phone settings | Camera WiFi is turned off | On THETA X: check the touchscreen WiFi icon. On THETA A1: ensure the camera is powered on and WiFi mode is active |
| Camera SSID visible but phone won't connect | Too far from camera | Move within 3-5 meters of the camera. WiFi signal drops significantly beyond that range |
| Camera WiFi appears intermittently | WiFi channel conflict with other networks | This is common on busy construction sites or offices with many access points. Restart the camera to force a channel switch. If the issue persists, try connecting in a less congested area |
| Phone shows "incorrect password" | Default password was changed, or camera was reset | Check the camera's WiFi credentials. On THETA X, these appear in Settings. If needed, reset the WiFi configuration via the mobile app |

---

## Phone Connects Then Disconnects

This is the single most reported field issue. It happens because smartphones are designed to prioritize networks with internet access, and the THETA camera WiFi has no internet.

| Symptom | Likely cause | Solution |
|---------|-------------|----------|
| Phone connects to camera, then switches to another network within seconds | Phone auto-joins a known WiFi network with internet | **Step 1:** Disable "auto-join" on all other saved WiFi networks before connecting to the camera. **Step 2:** If using Android, disable "Switch to mobile data" in WiFi settings |
| Phone repeatedly drops the camera connection | Mobile data takes priority over the camera's WiFi (no internet) | Temporarily disable mobile data on your phone while using the camera. Re-enable it when done |
| Connection drops after a few minutes | Phone's WiFi power saving mode | Disable battery optimization for the RICOH360 mobile app. Keep the app in the foreground during capture |

**This is the #1 field issue.** The most reliable approach: before starting a capture session, (1) forget or disable auto-join on nearby WiFi networks, (2) disable mobile data, (3) connect to the camera WiFi, (4) open the RICOH360 mobile app.

---

## "No Internet" Warning on Phone

When you connect your phone to the camera's WiFi, your phone may show a warning that says "This network has no internet access" or "Connected, no internet."

**This is completely normal.** The camera creates a direct WiFi connection for data transfer, not for internet browsing. Simply dismiss the warning and keep the connection active.

On some Android phones, you may see a prompt asking "Stay connected?" Always tap "Yes" or "Keep connection."

---

## Corporate WiFi and Captive Portals

| Symptom | Likely cause | Solution |
|---------|-------------|----------|
| Camera cannot connect to office WiFi | Network requires a login page (captive portal) | THETA cameras cannot interact with captive portal pages. Ask your IT team to create a simple WPA2 network for IoT devices, or use a mobile hotspot instead |
| Camera connects but never uploads | Network firewall blocks outbound connections | The camera needs HTTPS (port 443) access to RICOH360 cloud servers. Ask your IT team to whitelist the required domains |
| WiFi works on some sites but not others | Different network configurations per site | Configure multiple WiFi networks on the camera (via the mobile app). The camera will automatically connect to whichever saved network is available |

**Practical workaround for restricted networks:** Use your phone's mobile hotspot as the camera's WiFi network. Configure the hotspot credentials on the camera once, and it will connect whenever the hotspot is active. This bypasses corporate network restrictions entirely.

---

## Bluetooth Pairing Failures

| Symptom | Likely cause | Solution |
|---------|-------------|----------|
| Camera does not appear in Bluetooth device list | Bluetooth is disabled on camera or phone | Verify Bluetooth is enabled on both devices. On THETA X, check the Bluetooth icon on the touchscreen |
| Bluetooth pairs but app cannot control camera | Bluetooth alone is not enough for full control | Bluetooth is used for initial discovery and wake-up. Full camera control requires a WiFi connection. After Bluetooth pairing, the app will prompt you to also connect via WiFi |
| Pairing worked before but stopped | Bluetooth pairing cache corrupted | Remove the camera from your phone's Bluetooth paired devices list, then re-pair from scratch using the RICOH360 mobile app |

---

## Upload Stuck or Slow

| Symptom | Likely cause | Solution |
|---------|-------------|----------|
| Photos uploaded but never appear on the platform | Server-side processing takes time | After upload, the cloud processes each image (stitching, AI tagging). This can take 1-5 minutes per image. Wait and refresh the web app |
| Upload progress bar stuck at 0% | Camera is not connected to a WiFi network with internet | Verify the camera is connected to a WiFi network that has internet access (not the phone-to-camera WiFi). Upload requires cloud connectivity |
| Upload extremely slow | Slow WiFi network or large file sizes | 11K panoramas are approximately 20-30 MB each. On slow connections, uploads can take several minutes per photo. Connect to a faster network if possible |
| Some photos uploaded, others did not | Upload was interrupted (WiFi dropped, camera went to sleep) | The camera will resume uploading automatically when reconnected to WiFi. You can also trigger a manual sync from the admin console |

---

## Auto-Upload Not Working (Simple Capture)

| Symptom | Likely cause | Solution |
|---------|-------------|----------|
| Camera captures photos but they never appear in the cloud | Camera is not connected to an upload WiFi network | Simple Capture requires a configured WiFi network for cloud transfer. The camera-to-phone WiFi is for live control only, not for uploading to the cloud |
| Auto-upload works on one site but not another | Different WiFi networks, only one is configured | Add the new site's WiFi network to the camera via the mobile app. The camera stores multiple networks and connects automatically |
| Uploads only happen when back at the office | No WiFi with internet access on the field site | This is expected if the field site has no WiFi. Photos are stored locally and upload when the camera connects to a saved network. Consider setting up a mobile hotspot if real-time upload is needed on site |
| Photos appear in the wrong album | Album assignment changed or not properly set | In Simple Capture, verify the correct album is selected on the camera screen before capturing. Album assignments are configured during kitting |

---

## Camera Not Appearing in Admin Console

| Symptom | Likely cause | Solution |
|---------|-------------|----------|
| Camera is powered on but not visible in the web app | Camera has never been registered (Twin not created) | The camera must be registered to your team during onboarding. Contact your account manager if the camera was not set up |
| Camera was visible before but now shows "offline" | Camera lost its WiFi connection | Reconnect the camera to a WiFi network with internet. The Twin status updates once the camera is back online |
| Camera shows outdated information (old battery level, old firmware) | Camera has not synced recently | The Twin reflects the last known state. Connect the camera to WiFi so it can sync its current status to the cloud |
| Firmware update available but won't install | Camera needs a stable WiFi connection and sufficient battery | Ensure the camera has at least 50% battery and a reliable WiFi connection before starting a firmware update. Do not power off during the update |

> See also: [MasterClass: Firmware Updates (Video 5/14)](https://youtu.be/jxDboxjp_v4)

---

## Go Further

- [WiFi Connection FAQ (Help Center)](https://support.ricoh360.com/fr/faq/ricoh360-app-connection-001)
- [RICOH360 App FAQ (Help Center)](https://support.ricoh360.com/fr/faqs/ricoh360-app)
- [Firmware Update Guide (Help Center)](https://support.ricoh360.com/fr/tags/ricoh360-app-firm-update)
- [MasterClass: Firmware Updates (Video 5/14)](https://youtu.be/jxDboxjp_v4)
- [Camera Issues](/en/troubleshooting/camera-issues)
- [Hardware Setup](/en/getting-started/hardware-setup)
