---
title: Projects and Floor Plans
description: Projects are the spatial organization layer in the RICOH360 App. Position 360 captures on floor plans so your team can see exactly where each photo was taken.
outline: [2, 3]
---

# Projects and Floor Plans

Projects are the spatial organization layer in the RICOH360 App. While albums group photos by theme or date, projects let you position 360 captures on a floor plan so your team can see exactly where each photo was taken. This guide covers everything you need to create, populate, and navigate projects, including what to do if you do not have a floor plan ready.

---

## 1. What Are Projects?

A project is a container that combines floor plan images with positioned 360 photos. When you open a project, you see a floor plan filling the screen, with markers (pins) showing the exact locations where panoramas were captured. Clicking a marker opens the 360 viewer for that location.

Projects add a spatial dimension to your content. Instead of scrolling through a list of thumbnails, your team navigates a visual map: click on the meeting room to see the meeting room, click on the loading dock to see the loading dock.

**The organizational hierarchy in RICOH360:**

| Level | What it does | Required? |
|-------|-------------|-----------|
| Gallery (Photos & Videos) | Chronological pool of all captured media | Automatic |
| Albums | Group media by theme, date, or campaign | Optional |
| Projects | Position media on floor plans with spatial context | Optional |

Each layer builds on the previous one, and each is entirely optional. Most teams start with albums and move to projects when they need spatial context.

---

## 2. When to Use Projects vs. Albums

Albums and projects serve different purposes. Here is a simple way to decide which one fits your workflow.

**Use albums when:**
- You need a straightforward grouping (e.g., "Site Visit April 2026", "Building B Inspection").
- Your team browses photos chronologically or by category.
- You do not need to show where each photo was taken on a map.

**Use projects when:**
- Your team regularly asks "Where was this photo taken?"
- You work with multi-room, multi-floor, or multi-zone sites.
- You need to revisit the same locations over time and compare conditions.
- Stakeholders who were not on site need to understand the spatial layout.

**The simple test:** If someone looking at your photos would benefit from seeing them pinned to a plan rather than listed in a grid, projects will add value.

---

## 3. Creating a Project

### Step 1: Start a new project

1. In the RICOH360 web app, go to the **Projects** section in the left menu.
2. Click **Create Project**.
3. Enter a project name (e.g., "Warehouse Lyon - Renovation 2026") and an optional description.

Choose a name that your entire team will recognize. If you manage multiple sites, include the site name or address.

![Project list showing multiple projects with thumbnails](/images/webapp/projects_list.png)

### Step 2: Create zones

Zones let you divide a project into logical sections. A zone typically represents a floor, a wing, or a distinct area.

1. Inside your project, create your first zone (e.g., "Ground Floor", "Zone A", "Exterior").
2. Add more zones as needed for additional floors or areas.

**Naming tip:** Keep zone names short and consistent. If your building has three floors, use "Floor 0", "Floor 1", "Floor 2" rather than mixing naming styles.

---

## 4. Adding Floor Plans

Each zone needs a floor plan image. The floor plan is the visual backdrop on which you will position your 360 photos.

### Accepted file types

Upload your floor plan as an image file:
- **PNG** (recommended for clean architectural plans)
- **JPG / JPEG** (works well for scanned documents or photos)
- **SVG** (for vector-based drawings)

### Uploading a floor plan

1. Open a zone within your project.
2. Click the upload area or button to add a floor plan image.
3. Select your file. The image appears as the background of that zone.

![Project homepage with Drawing List showing uploaded floor plans](/images/webapp/project_homepage.png)

### "I don't have a floor plan"

This is the most common question we hear, and the answer is straightforward: you do not need a professional architectural drawing. Any image that represents your space will work. The system treats the floor plan as a background image on which you place markers. It does not interpret the drawing or extract measurements.

Here are practical alternatives:

| Alternative | How to create it | Best for |
|-------------|-----------------|----------|
| **Hand-drawn sketch** | Draw the layout on paper, take a photo with your phone | Quick setup, small spaces |
| **Simple digital diagram** | Use any drawing tool (PowerPoint, Google Slides, even Paint) to create a basic rectangle layout | Medium-complexity spaces |
| **Satellite or aerial image** | Screenshot from Google Maps or Google Earth | Outdoor areas, large sites, campus layouts |
| **Existing architect plan** | Export as PNG or JPG from your architect's files (AutoCAD, Revit, PDF) | Professional accuracy |
| **Scanned paper plan** | Scan or photograph an existing paper plan | Older buildings with paper archives |
| **Building management system export** | Export a floor view from your FM or BMS software | Facility managers with existing tools |

The key point: if you can see the layout and recognize where rooms are, it works. Perfection is not required. A rough sketch with labeled rooms is genuinely more useful than no plan at all.

> **Go further**
> - [Full web browser manual (Helpcenter)](https://support.ricoh360.com/fr/manuals/ricoh360-web-browser)

---

## 5. Placing Photos on the Plan (Markers)

Once your floor plan is uploaded, you position 360 photos on it as markers (pins).

### How to place a marker

1. Open your project and select the zone with the floor plan.
2. Choose a panorama from your library and drag it to the correct position on the plan.
3. The marker appears as a pin on the floor plan. Repeat for each photo you want to position.

### What markers show

- Each marker displays a small thumbnail preview on hover or click.
- Clicking a marker opens a side panel with the panorama preview.
- From the preview panel, click through to the full 360 viewer.

### Important: positioning is manual

Markers are placed by hand. There is no automatic positioning based on GPS coordinates or image recognition. You decide where each pin goes on the plan.

This means:
- Placement takes a few seconds per photo (drag to the right spot).
- Accuracy depends on how well you know the site.
- For large batches of photos, set aside time to position them after capture.

**Practical advice:** Position your photos as you upload them, while the capture session is fresh in your memory. Doing it later in bulk is possible but slower, because you need to recognize each location from the panorama content.

![Floor plan with photo markers (pins) positioned across the building](/images/webapp/floorplan_view.png)

---

## 6. Navigating a Project

Once your project has floor plans and positioned markers, navigation is intuitive.

### Zone-by-zone browsing

The left sidebar lists all zones in your project. Click a zone name to load its floor plan. If your building has three floors, you switch between them with a single click.

### Exploring markers

On the floor plan, markers show you at a glance which locations have been captured. Click any marker to:
1. See a thumbnail preview in the side panel.
2. Open the full 360 viewer to explore that location.

### The project view layout

| Area | What it shows |
|------|--------------|
| Left sidebar | Project info, zone selector, annotation list |
| Center | Floor plan with markers (full screen) |
| Right panel (on click) | Panorama preview, link to 360 viewer |

The floor plan is the centerpiece. Everything else supports navigation around it.

![360 Viewer with floor plan minimap overlay showing current position](/images/webapp/project_viewer.png)

---

## 7. Limitations to Know

Being transparent about what projects can and cannot do helps you set the right expectations for your team.

| Limitation | What it means in practice |
|-----------|--------------------------|
| **Floor plan required** | A zone without a floor plan image is essentially empty. Projects are built around the visual plan. If you do not have any kind of plan or diagram, albums are a better starting point. |
| **Manual marker positioning only** | There is no automatic placement of photos based on GPS data. Every marker is positioned by dragging it onto the plan. |
| **No project-level sharing** | You cannot share an entire project (floor plan + markers) via a public link. External stakeholders need to be invited as team members to see projects. Individual photos can still be shared via link, but without the floor plan context. |
| **Annotations not visible externally** | Annotations placed on panoramas within a project are stripped when sharing individual photos by link. The recipient sees the 360 image only. |
| **No timeline view** | Projects show spatial position but not temporal progression. To compare the same location at different dates, use the Side-by-Side feature from the viewer. |
| **Albums and projects are separate views** | Albums linked to a project are not directly visible from the project floor plan view. You navigate albums and projects independently. |

---

## 8. Tips for Success

**Start small.** Create one project with one zone and one floor plan. Place five or ten markers. Get your team comfortable with the workflow before scaling up. A single well-organized project is more useful than five empty ones.

**Be consistent with zone naming.** Agree on a naming convention before creating zones. "Floor 0 / Floor 1 / Floor 2" or "Ground / First / Second" are both fine, as long as everyone uses the same pattern. If you manage multiple buildings, prefix with the building name: "Building A - Floor 0".

**Use projects for repeat visits.** Projects shine when you return to the same site over time. Each visit, you place new markers at the same locations. Over weeks and months, you build a spatial record of your site's evolution. Combined with Side-by-Side comparison, this becomes a powerful progress tracking tool.

**Position photos right after capture.** The longer you wait between capturing photos and placing them on the plan, the harder it becomes to remember which panorama belongs where. Make positioning part of your post-visit routine.

**Keep floor plans readable.** If your architect's plan is very detailed with dense technical annotations, consider creating a simplified version. The plan is a navigation aid, not a construction document. Readable room labels and clear boundaries matter more than technical precision.

---

## 9. What's Next

Once your team is comfortable with projects and floor plans, explore these related features:

- **Side-by-Side Comparison**: Open two panoramas from the same location, taken at different dates, to track changes or progress. This pairs naturally with projects for repeat-visit workflows. See [Side-by-Side Comparison](/en/daily-use/side-by-side-comparison).

- **Annotations and Markup**: Place markers directly on 360 panoramas to flag observations, document defects, or leave notes for colleagues. Annotations work both inside and outside of projects. See [Annotations and Markup](/en/daily-use/annotations-and-markup).

- **Use Case Guides**: For end-to-end workflows tailored to your industry, including how projects fit into site documentation, construction tracking, and inspection reporting. See the [Use Case Guides](/en/use-cases/site-documentation) section.

> **Go further**
> - [Full web browser manual (Helpcenter)](https://support.ricoh360.com/fr/manuals/ricoh360-web-browser)
> - [Admin console (Helpcenter)](https://support.ricoh360.com/fr/tags/ricoh360-web-admin-console)
