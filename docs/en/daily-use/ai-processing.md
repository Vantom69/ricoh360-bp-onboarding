---
title: AI Processing
description: RICOH360 includes built-in AI processing that can enhance image quality, blur people for privacy compliance, and extract flat 2D images from your 360 panoramas.
outline: [2, 3]
---

# AI Processing

> RICOH360 includes built-in AI processing that can enhance image quality, blur people for privacy compliance, and extract flat 2D images from your 360 panoramas. These features run in the cloud and are available from the Viewer with a single click.

---

## 1. Overview of AI Features

RICOH360 offers four AI-powered processing capabilities, all accessible from the 360 Viewer toolbar:

| Feature | What it does |
|---------|-------------|
| **Super Resolution + Enhancement** | Improves overall image quality: sharpens details, boosts resolution, and automatically corrects low-light areas |
| **Face Blur (Privacy Blur)** | Detects and blurs people in the panorama for privacy and compliance |
| **Crop Perspective** | Extracts a flat 2D image from any angle within the 360 panorama |

All three features work on 360 photos (panoramas). They are not available for 360 video.

![AI Editing panel: Image Enhancement and Blur Person](/images/webapp/ai_editing.png)

---

## 2. Super Resolution and Enhancement

### What it does

Enhancement applies a combined AI algorithm that improves image quality in two ways at once:

1. **Super Resolution**: Increases the effective resolution and sharpness of the panorama, making details like text on signs, equipment labels, or surface textures clearer when you zoom in.
2. **Low-Light Enhancement**: Automatically detects and corrects underexposed areas. If parts of the panorama are too dark (common in indoor captures, basements, or rooms with mixed lighting), the algorithm brightens those areas while preserving natural tones.

By default, RICOH360 applies both improvements together in a single pass. You do not need to choose between them.

### How to use it

1. Open a panorama in the 360 Viewer.
2. Click the **Enhancement** button in the toolbar.
3. The first time you enhance a specific panorama, processing takes a moment (typically a few seconds to under a minute). A progress indicator shows the status.
4. Once processing is complete, the enhanced version loads automatically in the viewer.
5. On subsequent views, the enhanced version loads instantly because the result is cached on the server.

### When to use it

- **Dark interior captures**: Basements, mechanical rooms, or poorly lit warehouses.
- **Detail inspection**: When you need to zoom in on small details like serial numbers, wall damage, or equipment conditions.
- **General quality improvement**: Enhancement improves virtually any panorama, even those captured in good lighting.

---

## 3. Face Blur (Privacy Blur)

### What it does

Face Blur uses AI to detect people in the panorama and blur them. The detection covers full persons, not just faces. If someone is visible in the panorama, their entire body is blurred, making them unrecognizable. This addresses privacy requirements (GDPR and similar regulations) when sharing site documentation that may include bystanders, workers, or passersby.

### How to use it

1. Open a panorama in the 360 Viewer.
2. Click the **Privacy Blur** button in the toolbar.
3. Processing runs in the cloud. The first time takes a few seconds; subsequent views load the cached result instantly.
4. The blurred version replaces the original in the viewer. All detected persons are blurred.

### Important details

- Detection covers full bodies, not just faces. A person seen from behind is blurred too.
- Blurring is applied to the processed copy. The original unblurred panorama remains stored and accessible.
- You cannot selectively blur or unblur individual persons. The feature applies to all detected people at once.

### When to use it

- **Sharing site documentation externally**: Before generating a share link for a panorama, apply Privacy Blur to ensure no individuals are identifiable.
- **Compliance with privacy regulations**: If your organization requires anonymization of captured environments before storage or distribution.
- **Construction sites and facilities**: Where workers, visitors, or the public may appear in panoramas.

---

## 4. Crop Perspective

### What it does

Crop Perspective lets you extract a standard flat (2D) image from any viewing angle within a 360 panorama. Instead of sharing an entire 360 view, you point the viewer at a specific area of interest and crop it as a regular rectangular image.

### How to use it

1. Open a panorama in the 360 Viewer.
2. Navigate to the angle and zoom level you want to capture.
3. Click the **Crop** button in the toolbar.
4. Adjust the crop frame if needed (field of view, width, height).
5. Confirm the crop. The system generates a flat 2D image from that perspective.
6. Download or use the resulting image.

### When to use it

- **Reports and presentations**: Extract a specific view (e.g., a wall defect, an equipment closeup) as a standard image for inclusion in documents.
- **Email communication**: When you need to share a specific detail with someone who does not need the full 360 experience.
- **Documentation**: Create focused images from your 360 captures without going back on site with a regular camera.

---

## 5. How AI Processing Works

All AI features follow the same pattern:

1. **First request**: You click the button. RICOH360 sends the panorama to the cloud for processing. This is asynchronous, meaning processing runs in the background.
2. **Processing**: The AI algorithm runs. Duration varies by feature and image complexity, but typically completes in a few seconds.
3. **Caching**: Once processing finishes, the result is stored on the server. Any future request for the same processing on the same panorama returns the cached result immediately.

This means:
- The first time you enhance or blur a panorama, expect a brief wait.
- Every subsequent time, the result appears instantly.
- Processing does not modify the original file. The original panorama is always preserved.

---

## 6. Limitations

| Limitation | What it means in practice |
|-----------|--------------------------|
| **Panoramas only** | AI processing features work on 360 photos. They are not available for 360 video. |
| **No batch processing from the interface** | You trigger processing one panorama at a time from the Viewer. There is no "enhance all photos in this album" button. |
| **Full-person blur only** | Privacy Blur blurs all detected persons in the panorama. You cannot selectively blur or unblur specific individuals. |
| **Processing time on first use** | The first time you process a specific panorama, it takes a moment. Subsequent requests are instant (cached). |
| **Enhancement is automatic** | The combined algorithm (resolution + low-light) runs as a single pass. You cannot separately control the strength of each improvement. |

---

## 7. What's Next

- **Side-by-Side Comparison**: After enhancing panoramas, use Side-by-Side to compare the enhanced version with the original, or to compare captures from different dates. See [Side-by-Side Comparison](/en/daily-use/side-by-side-comparison).

- **Sharing with External**: When sharing panoramas externally, apply Privacy Blur first to ensure compliance. See [Sharing with External Stakeholders](/en/daily-use/sharing-with-external).

- **Inspection Reporting**: AI processing is especially valuable for inspection workflows where image clarity and privacy compliance both matter. See [Inspection Reporting](/en/use-cases/inspection-reporting).

> **Go further**
> - [MasterClass Video 8/14 - Super Resolution (FR)](https://youtu.be/PUrD701fmRw)
> - [MasterClass Video 9/14 - Face Blur (FR)](https://youtu.be/VXNK0fQgK4c)
