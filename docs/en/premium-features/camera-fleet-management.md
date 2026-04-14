---
title: Camera Fleet Management
description: The RICOH360 Admin Console includes a THETA Management section that gives administrators a centralized view of all registered cameras, with monitoring and remote configuration capabilities.
outline: [2, 3]
---

# Camera Fleet Management

> The RICOH360 Admin Console includes a THETA Management section that gives administrators a centralized view of all registered cameras. You can monitor battery levels, firmware versions, storage status, and connection state across your entire fleet. For cameras running Simple Capture, you can also assign albums and configure remote behaviors through the Twin system.

---

## 1. What Is THETA Management?

THETA Management is the camera administration section within the RICOH360 web app Admin Console. It provides a dashboard-style list of every THETA camera registered to your team, showing real-time status and allowing remote configuration.

This is where administrators go to answer questions like:
- Are all our cameras online and connected?
- Which cameras need charging?
- Is any camera running outdated firmware?
- How much storage is left on each device?
- Which albums are assigned to which camera?

---

## 2. The Camera List

When you open THETA Management in the Admin Console, you see a table listing all registered cameras.

### Information available per camera

| Property | What it shows |
|----------|--------------|
| **Serial number** | The unique identifier of the physical camera |
| **Model** | THETA X, THETA Z1, or THETA A1 |
| **Connection state** | Whether the camera is currently online (connected to WiFi and reachable) or offline |
| **Battery level** | Current battery percentage (0-100%) |
| **Battery state** | Whether the camera is charging or discharging |
| **Firmware version** | The firmware version currently installed on the camera |
| **Remaining storage** | How much local storage space remains on the camera's internal memory |

This information updates when the camera is connected and communicating with the cloud. If a camera is offline, the dashboard shows the last known values.

![THETA Management showing camera list with battery, firmware, and storage status](/images/webapp/admin_theta_management.png)

---

## 3. Understanding the Twin Concept

Every THETA camera registered in the RICOH360 cloud has a **Twin**. A Twin is a digital representation (a "digital twin") of the physical camera. Think of it as a virtual counterpart that mirrors and controls the real device.

### What the Twin enables

| Capability | Description |
|-----------|-------------|
| **Remote monitoring** | View battery, firmware, storage, and connection status from anywhere through the web app |
| **Remote configuration** | Change certain camera behaviors without physically touching the device |
| **Event tracking** | The cloud records when the camera uploads content, connects, disconnects, or reports an error |

The Twin exists in the cloud even when the physical camera is off or disconnected. It stores the last known state and queues any configuration changes you make. When the camera comes back online, it syncs with its Twin and applies pending changes.

### Supported camera models

| Model | Twin support | Simple Capture | Notes |
|-------|:-----------:|:--------------:|-------|
| **THETA X** | Yes | Yes | Full Twin features including Simple Capture album assignment |
| **THETA Z1** | Yes | No | Monitoring only, no Simple Capture |
| **THETA A1** | Yes | No | Monitoring only, no Simple Capture |

![Connected Cameras list in the mobile app](/images/mobile/theta_list.png)

---

## 4. Remote Configuration via Twin Properties

For cameras that are connected, administrators can modify certain behaviors remotely through the Twin. These settings apply the next time the camera syncs.

### Configurable properties

**Timelapse**
Set the camera to capture panoramas automatically at regular intervals. You define the start time, end time, interval between captures (in seconds), and which days of the week the timelapse is active. This is useful for construction sites or facilities where you want periodic automated documentation without an operator.

**Scheduled reboot**
Set a daily reboot time (e.g., 03:00 AM) to keep the camera running smoothly during long deployments. Cameras that run continuously for extended periods benefit from a periodic restart.

**Auto-delete after upload**
When enabled, the camera automatically deletes local files after they have been successfully transferred to the RICOH360 cloud. This frees up local storage so the camera never fills up during active use. This is strongly recommended for cameras deployed in the field with Simple Capture.

**Automatic firmware updates**
Enable or disable automatic firmware updates. When enabled, the camera downloads and installs new firmware versions when connected to WiFi. Keeping firmware current ensures you have the latest features and bug fixes.

---

## 5. Assigning Albums to Cameras (Simple Capture)

For THETA X cameras running Simple Capture, the Admin Console lets you assign specific albums to each camera. This controls what the field operator sees on the camera screen.

### How it works

1. Open THETA Management in the Admin Console.
2. Select a registered THETA X camera.
3. In the camera settings, find the album assignment section.
4. Select which albums this camera should display.
5. Save the assignment.

The next time the camera connects and syncs, the assigned albums appear on its screen. The field operator selects an album, captures a panorama, and the photo is automatically uploaded to that album in the cloud.

### Album assignment guidelines

- **Keep the list short.** The Simple Capture interface on the camera screen is designed for 10 to 15 albums. Beyond that, scrolling through a long list on the small screen becomes impractical.
- **Use clear album names.** The operator sees the album name on the camera screen. Names like "Building A - Ground Floor" are much more helpful than "Album 37".
- **Update assignments as needed.** When a project phase ends or a site is completed, remove old albums and add new ones. This keeps the operator's screen relevant.

---

## 6. Firmware Monitoring Across Your Fleet

When managing multiple cameras across sites, firmware consistency matters. The THETA Management list shows the firmware version of each camera, making it easy to spot devices that are behind.

### Checking firmware status

1. Open THETA Management.
2. Review the firmware version column. All cameras of the same model should ideally run the same version.
3. If a camera shows an older version, ensure it is connected to WiFi and that automatic firmware updates are enabled in its Twin properties.

### Firmware update process

Firmware updates are delivered over WiFi. When a camera is connected and automatic updates are enabled, it downloads and installs new firmware without operator intervention. The update process requires the camera to restart, so it happens automatically during idle periods.

If automatic updates are disabled, you can manage updates manually through the mobile app when physically connected to the camera.

---

## 7. Practical Fleet Management Scenarios

### Scenario: Multiple cameras across multiple sites

A facilities management company deploys five THETA X cameras at five different locations, each with Simple Capture. The administrator:
- Assigns site-specific albums to each camera (e.g., Camera 1 gets "Lyon Warehouse" albums, Camera 2 gets "Paris Office" albums).
- Enables auto-delete on all cameras so local storage never fills up.
- Sets a nightly reboot at 03:00 on all cameras for stability.
- Checks the dashboard weekly to verify all cameras are online and firmware is current.

### Scenario: Periodic check-in for camera health

Once a week, the administrator opens THETA Management and reviews:
- **Connection state**: Any camera showing "offline" for an extended period may have a WiFi issue or a power problem on site.
- **Battery level**: Cameras consistently showing low battery may need a charging station adjustment at their deployment location.
- **Storage**: Even with auto-delete enabled, a quick check confirms uploads are happening correctly.

---

## 8. Limitations

| Limitation | What it means in practice |
|-----------|--------------------------|
| **Camera must be online** | Twin monitoring and remote configuration only work when the camera is connected to WiFi and communicating with the cloud. An offline camera shows its last known state, and any configuration changes queue until it reconnects. |
| **Not all properties available on all models** | Simple Capture and album assignment are THETA X only. THETA Z1 and A1 support basic monitoring (battery, firmware, storage, connection) but not the guided capture workflow. |
| **Capture settings are not remotely configurable** | Parameters like HDR mode, image resolution, and exposure compensation are set during the initial camera configuration (kitting). You cannot change them from the web app. To modify capture settings, the camera needs to be physically reconfigured. |
| **No alert system** | The dashboard shows current status, but there are no automated alerts (e.g., email when a camera goes offline or battery drops below 10%). You need to check the dashboard proactively. |
| **Simple Capture is limited to 10-15 albums** | While you can technically assign more albums, the camera screen is not designed for long lists. Keep album assignments focused and manageable. |

---

## 9. Tips for Fleet Administrators

**Check the dashboard regularly.** Make it a habit to review THETA Management at least once a week, especially if cameras are deployed at remote sites. A five-minute check can catch issues before they become problems.

**Standardize firmware across your fleet.** Enable automatic firmware updates on all cameras. Running different firmware versions across devices can lead to inconsistent behavior and makes troubleshooting harder.

**Enable auto-delete.** For any camera used in a routine capture workflow (especially Simple Capture), auto-delete after cloud upload is almost always the right choice. It prevents storage from filling up and eliminates the need for someone to manually manage files on the camera.

**Label your cameras.** Put a physical label on each camera with its serial number and assigned site name. When the dashboard shows "Camera YR10010018 is offline," you need to know which physical device that corresponds to and where it is located.

**Plan your album structure before deployment.** Setting up clear album assignments before sending cameras to the field reduces confusion for operators and keeps your cloud storage well-organized from day one.

---

## 10. What's Next

- **Team Management**: Camera fleet management works hand-in-hand with team management. Make sure the right people have Admin access to manage cameras. See [Team Management](/en/premium-features/team-management).

- **Simple Capture Setup**: If you are deploying THETA X cameras with Simple Capture for the first time, start with the setup guide. See [Simple Capture Setup](/en/getting-started/simple-capture-setup).

- **Site Documentation**: For a complete workflow that combines camera deployment, capture, and organization for facility documentation. See [Site Documentation](/en/use-cases/site-documentation).

> **Go further**
> - [THETA List Display (Helpcenter)](https://support.ricoh360.com/fr/tags/ricoh360-web-theta-list-display)
> - [MasterClass Video 4/14 - Camera Management (FR)](https://youtu.be/9k1jxIEstcE)
> - [MasterClass Video 14/14 - API Camera Dashboard (FR)](https://youtu.be/G7azashJdoE)
> - [Admin Console (Helpcenter)](https://support.ricoh360.com/fr/tags/ricoh360-web-admin-console)
