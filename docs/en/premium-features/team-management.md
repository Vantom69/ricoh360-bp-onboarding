---
title: Team Management
description: The RICOH360 Admin Console lets you invite team members, assign roles, monitor storage usage, and manage licenses.
outline: [2, 3]
---

# Team Management

> The RICOH360 Admin Console lets you invite team members, assign roles, monitor storage usage, and manage licenses. This guide covers everything an administrator needs to set up and maintain their team.

---

## 1. How Teams Work in RICOH360

Every RICOH360 Business Pack comes with a team workspace. A team is a shared environment where all members can access the same gallery of 360 photos, albums, projects, and cameras. Everything captured by any team member or any registered camera flows into this shared workspace.

Each Business Pack license includes up to 10 user accounts. If your organization needs more seats, additional licenses provide more users (and more storage and cameras).

---

## 2. Roles: Admin vs. Member

RICOH360 uses two roles. There are no custom roles or intermediate permission levels.

| Capability | Admin | Member |
|-----------|:-----:|:------:|
| View all photos, albums, and projects | Yes | Yes |
| Capture and upload panoramas | Yes | Yes |
| Create and edit albums | Yes | Yes |
| Create and edit projects | Yes | Yes |
| Use annotations and drawing tools | Yes | Yes |
| Share individual panoramas via link | Yes | Yes |
| Invite new team members | Yes | No |
| Remove team members | Yes | No |
| Manage camera registrations (Twins) | Yes | No |
| Assign albums to cameras | Yes | No |
| View license and storage usage | Yes | No |
| Access the Admin Console | Yes | No |

**In short:** Members can do everything related to content (capture, organize, view, annotate, share). Admins can do all of that plus manage people, cameras, and account settings.

![Members list showing Admin, Member, and Pending roles](/images/webapp/admin_members.png)

---

## 3. Inviting Team Members

### Step-by-step

1. Log in to the RICOH360 web app with an Admin account.
2. Open the **Admin Console** from the left menu.
3. Go to the **Team Management** section.
4. Click **Invite Member**.
5. Enter the email address of the person you want to invite.
6. Select the role: **Admin** or **Member**.
7. Click **Send Invitation**.

The invited person receives an email with a link to join your team. They will need to create a RICOH360 account (or log in with an existing one) and accept the invitation.

### What happens after the invitation

- The new member immediately gets access to the entire team workspace: all photos, albums, projects, and shared cameras.
- There is no way to restrict a member's access to specific albums or projects. Team membership is all-or-nothing within the workspace.
- The invitation counts against your available license seats.

### Practical advice

- Send invitations to professional email addresses that team members check regularly.
- Communicate internally before sending the invitation so the person knows to expect it and accept it.
- If an invitation is not accepted, it can be resent from the Admin Console.

---

## 4. Monitoring Storage

Each Business Pack license includes 100 GB of cloud storage. Storage is pooled at the team level, meaning all members share the same storage quota.

![Admin Dashboard with usage counts and upload statistics](/images/webapp/admin_dashboard.png)

### Checking storage usage

1. Open the **Admin Console**.
2. The storage overview shows total capacity and current usage.

### When storage runs low

If your team approaches the 100 GB limit, you have two options:

1. **Add another license**: Each additional Business Pack license adds 100 GB to your team pool, along with more user seats and an additional camera.
2. **Clean up existing data**: Review your gallery and albums for outdated or duplicate captures. Deleting media you no longer need frees up space immediately.

### Storage planning tip

A single 360 panorama captured at 11K resolution is approximately 20-30 MB. At 100 GB per license, that gives you roughly 3,000 to 5,000 panoramas per license before needing to manage storage. For most teams doing weekly site visits, one license provides several months of captures before cleanup becomes necessary.

---

## 5. Removing Team Members

### Step-by-step

1. Open the **Admin Console**.
2. Go to **Team Management**.
3. Find the member you want to remove.
4. Click **Remove** (or the equivalent action).
5. Confirm the removal.

### What happens when you remove a member

- The person loses access to the team workspace immediately.
- Content they uploaded remains in the team gallery. Removing a member does not delete their contributions.
- The license seat they occupied becomes available for a new invitation.

---

## 6. Managing Licenses

The Admin Console shows your current license status:

| Information | What it shows |
|------------|--------------|
| **Seats used / available** | How many of your user slots are occupied |
| **Subscription plan** | Your current Business Pack type (Core or Type S) |
| **Storage capacity** | Total storage across all your licenses |

If you need to adjust your license count (add or reduce), contact your RICOH360 account manager. License changes are handled through your Business Pack contract.

---

## 7. Limitations

| Limitation | What it means in practice |
|-----------|--------------------------|
| **Two roles only** | Admin and Member. There are no custom roles, no "viewer-only" role, and no project-specific permissions. Everyone on the team sees everything. |
| **No activity log** | There is no audit trail showing who uploaded, deleted, or shared specific content. If traceability is a requirement for your organization, be aware that this is not available today. |
| **No granular permissions** | You cannot restrict a member's access to specific albums, projects, or cameras. Team membership grants full access to the workspace. |
| **No SSO (Single Sign-On)** | Authentication uses RICOH360 accounts. There is no integration with corporate identity providers (Azure AD, Okta, Google Workspace, etc.). |
| **No sub-teams or groups** | You cannot create departments or groups within a team. All members belong to the same flat team structure. |

---

## 8. Tips for Team Administrators

**Start with a small admin group.** Assign the Admin role only to people who need to manage cameras and team membership. For everyone else, the Member role provides full access to all content features.

**Track your seats.** With 10 seats per license, plan your invitations. If you are deploying across a large team, you may need multiple licenses. Each additional license adds both seats and storage.

**Establish naming conventions early.** Since all members share the same workspace, agree on album and project naming conventions before the team grows. Consistent names prevent confusion as your library of panoramas increases.

**Brief new members.** When inviting someone, send them a quick note with the basics: how to accept the invitation, where to find the mobile app, and your team's naming conventions. A five-minute briefing saves hours of confusion later.

---

## 9. What's Next

- **Camera Fleet Management**: If you manage multiple THETA cameras across your team, learn how to monitor and configure them remotely from the Admin Console. See [Camera Fleet Management](/en/premium-features/camera-fleet-management).

- **Projects and Floor Plans**: Once your team is set up, organize your captures spatially with projects and floor plans. See [Projects and Floor Plans](/en/premium-features/projects-and-floor-plans).

- **Quick Start Guide**: Share this with new team members to get them up and running quickly. See [Quick Start Guide](/en/getting-started/quick-start-guide).

> **Go further**
> - [Admin Console (Helpcenter)](https://support.ricoh360.com/fr/tags/ricoh360-web-admin-console)
> - [BP Type S - User Management (Helpcenter)](https://support.ricoh360.com/fr/tags/bp-type-s-user-management)
> - [Business Pack FAQ (Helpcenter)](https://support.ricoh360.com/fr/faqs/business-package)
