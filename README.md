# Segment events and tracking plans

This repo contains [event](events) and [tracking plan](tracking-plan) specifications for Segment Protocols. When commits are made to the `main` branch, event documentation and Segment tracking plans are updated via [GitHub Actions](.github/workflows/build.yml).

This intent is to enable organizations to manage their Segment schema as code.

## Events and Tracking Plans

Events in the schema are defined in the [events folder](events) in yaml. Event files define both structure (properties and types) as well as documentation, examples, and metadata.

[Tracking Plans](tracking-plans) files define Segment tracking plans and specify subsets (or all) of the available events in the [events folder](events). This allows definition of targeted tracking plans for specific Segment sources from a single pool of events. Tracking Plans define their events using the `event_selectors` key.

## YAML

Events and tracking plans are expressed in yaml which define both specifications and documentation for these entities. yaml was chosen for ease of human editing and clear commit diffs in GitHub.

## Pull Requests

If a change is needed to an event or tracking plan, it should be submitted in a Pull Request to the `main` branch. See below.

## GitHub Actions

All work is done using GitHub Actions.
Action code resides in a container image built from the [schema-tools](https://github.com/hmedney-segment/schema-tools) repo.

### Pull Request Workflow

The [Pull Request Workflow](.github/workflows/pr.yml) runs on each PR to `main`.

- Assigns label(s) to the PR indicating whether the change includes events and/or tracking plan changes. This helps with PR triage.
- Generates a schema impact report. The impact report works by generating ready-to-deploy tracking plan JSON for the PR branch and the `main` (live) branch. These 2 JSON objects are diffed, and the differernces are output to the Check Summary.

#### Build Workflow

The [Build Workflow](.github/workflows/build.yml) runs on commits to `main`.

- Rebuilds a static doc site from all events. The static site is deployed to this repo's GitHub Pages site.
- Generates Protocols tracking plan JSON file(s) and deploys them to Segment via the Config API. If an tracking plan exists in the Segment workspace with the same display name, it is overwritten.
