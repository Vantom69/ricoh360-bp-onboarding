---
title: Known Limitations
description: Current limitations of the RICOH360 platform with practical workarounds for each constraint, covering sharing, projects, annotations, Simple Capture, administration, and more.
outline: [2, 3]
---

# Known Limitations - Platform Reference

> This document lists the current limitations of the RICOH360 platform. It is not a troubleshooting guide. It is a transparent reference so you know what the platform can and cannot do today. For each limitation, we describe what you can do instead. The platform is actively evolving, and features are regularly added.

---

## Sharing

| Limitation | What you can do instead |
|------------|------------------------|
| Sharing works per individual media only. You cannot share an entire album or project via a single link | Share individual panoramas by link. For broader access, invite collaborators as team members (each license includes 10 seats) |
| Annotations are not visible on shared links. External recipients see the 360 panorama without any markers or notes | Export or screenshot annotated views before sharing. Use annotations for internal documentation and send plain 360 links externally |
| Shared links have no password protection | Shared links are public but unlisted (not indexed by search engines). For sensitive content, use the team member invitation system instead of public links |
| Shared links have no expiration date. Once created, a link remains active | If you need to revoke access, you can set the media back to private, which deactivates the link |
| Project views (floor plans with markers) cannot be shared externally | Share individual panoramas from the project. For full spatial navigation, invite the recipient as a team member |

---

## Projects and Floor Plans

| Limitation | What you can do instead |
|------------|------------------------|
| Projects require a floor plan image to be useful. Without a floor plan, the project view is empty | If you do not have a floor plan, use albums to organize your captures. Albums work well for most workflows without spatial positioning |
| Markers on floor plans must be positioned manually. There is no GPS-based auto-placement | Position markers by hand on the plan after uploading your captures. This takes a few seconds per marker |
| There is no built-in timeline or date-based navigation within projects | Use the Side-by-Side comparison feature to compare captures from different dates. Select panoramas manually from the filmstrip |
| Albums and projects are separate concepts. Albums assigned to a project are not visible in the project floor plan view | Use albums for organizational grouping and projects for spatial mapping. Navigate between them as needed in the web app |

---

## Annotations

| Limitation | What you can do instead |
|------------|------------------------|
| Annotations work on panoramas only, not on 360 videos | Capture a still panorama at key moments if you need to annotate a specific scene |
| Annotations are markers with a title and description. There is no comment thread or discussion feature | Use annotations to document observations. For discussions, reference the annotation in your team's usual communication channel |
| Annotations are not visible to external recipients when sharing via link | Annotations are designed for internal team documentation. Share the panorama link alongside a written summary if external context is needed |
| No categorization or tagging of annotations (e.g., defect, information, alert) | Use a naming convention in annotation titles to indicate type, such as "[DEFECT]" or "[INFO]" |

---

## Simple Capture

| Limitation | What you can do instead |
|------------|------------------------|
| Simple Capture is available on THETA X only. It requires the touchscreen for the guided workflow | On THETA A1, use the mobile app or physical shutter button for capture. Auto-upload to the cloud still works on all models |
| Designed for approximately 10-15 albums. The camera screen interface is not built for scrolling through long lists | If you have many sites or intervention types, group them into fewer high-level albums rather than one album per location. Your account manager can help plan the album structure during onboarding |
| Each camera has 1 capture preset (photo mode, resolution, HDR). This is configured during initial setup and cannot be changed by the user | If you need different capture settings, contact your account manager to arrange a kitting update |
| Simple Capture works in either photo or video mode, not both simultaneously | Choose the mode that best fits your primary workflow. If you need both, capture photos in Simple Capture mode and switch to the mobile app for video when needed |
| Initial setup requires a USB connection (kitting). It cannot be done remotely | Kitting is handled by Ricoh during onboarding. Replacement or reconfiguration requires sending the camera back or scheduling a session with your account manager |

---

## Administration

| Limitation | What you can do instead |
|------------|------------------------|
| Two user roles: admin and member. No custom roles, no read-only access | Admins can manage cameras, users, and settings. Members can capture, view, and organize. Assign the admin role only to team leads who need management access |
| No single sign-on (SSO) integration | Users log in with individual RICOH360 credentials. Your IT team does not need to manage integration |
| No activity log or audit trail | There is no built-in tracking of who uploaded, shared, or deleted content. If traceability is critical for your workflow, use album naming conventions to associate captures with operators |
| No sub-teams or groups within a team | All team members share the same workspace. Use album naming conventions or separate licenses to segment by department or location |

---

## Camera and Connectivity

| Limitation | What you can do instead |
|------------|------------------------|
| The web app requires an internet connection. There is no offline mode for viewing or managing content | All captures are stored locally on the camera until WiFi is available. You can review captures on the THETA X touchscreen or via the mobile app while on site |
| THETA Twin (the camera's cloud profile) requires the camera to have internet connectivity to update its status | Twin data refreshes each time the camera connects to WiFi. If the camera has been offline, the admin console shows the last known state |
| Cameras cannot connect to WiFi networks that use captive portals (login pages) | Use a mobile hotspot or ask your IT team to set up a simple WPA2 network for the camera |

---

## Video

| Limitation | What you can do instead |
|------------|------------------------|
| Video recording time varies by model. THETA X records approximately 25 minutes continuously. THETA A1 supports up to 120 minutes | For long recording sessions, the THETA A1 is the recommended option. For THETA X, plan capture in shorter segments |
| No annotations, drawing tools, face blur, or AI processing on 360 video. Video playback in the viewer is view-only | Capture a still panorama at key moments during a video session if you need to annotate or process specific frames |
| Side-by-Side comparison is not available for video | Compare still panoramas taken at the same location on different dates instead |

---

## Measurement and 3D

| Limitation | What you can do instead |
|------------|------------------------|
| The RICOH360 platform does not include measurement tools. You cannot measure distances or areas within a 360 panorama | For measurement needs, RICOH360 integrates with specialized partners through the App Connection marketplace. Ask your account manager about available options |
| No 3D reconstruction or point cloud generation from 360 captures | RICOH360 provides the capture and storage infrastructure. 3D workflows are handled by partner platforms (such as BIM or digital twin tools) that connect to RICOH360 via API |

---

## Other Platform Limitations

| Limitation | What you can do instead |
|------------|------------------------|
| No global search across photos, albums, or projects | Navigate by album or project structure. Consistent naming conventions make it easier to find content quickly |
| AI-generated tags on photos are not editable | The platform automatically tags scenes (indoor, outdoor, room type). These are for reference and cannot be customized |
| Maximum upload size via web app is 50 MB per file | Most 360 panoramas are well under this limit (typically 20-30 MB). For larger files, the camera-to-cloud transfer handles the upload directly |
| The App Connection marketplace is still in early development | New partner integrations are being added progressively. Contact your account manager to discuss your specific integration needs |

---

## Go Further

- [FAQ](/en/troubleshooting/faq)
- [Feature Matrix](/en/reference/feature-matrix)
- [Camera Comparison](/en/reference/camera-comparison)
- [RICOH360 Help Center](https://support.ricoh360.com/fr)
