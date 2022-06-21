# Segment events and tracking plans

This repo contains [event](events) and [tracking plan](tracking-plan) specifications for Segment Protocols. The files in the repo are "compiled" into a documentation site and into a set of tracking plans deployed to Segment.

This repository and supporting automation enables organizations to manage their Segment schema as code.

## How does it work?

### Events and Tracking Plans

Event files define events. All possible events in the schema are defined in the [events](events) folder.

[Tracking Plans](tracking=plans) contain various subsets (or all) of the available events. This allows definition of targeted tracking plans for specific Segment sources from a common pool of events. Tracking Plans define their events using the `event_selector` key.

### YAML

Events and tracking plans are expressed in yaml files which define both the specification and documentation for these entities. yaml was chosen for easy human editing.

### Pull Requests

If a change is needed to an event or tracking plan, it should be submitted in a Pull Request to the `main` branch.

This will trigger the Pull Request GitHub Action.

### GitHub Actions

All work is done using GitHub Actions.
Action code resides in a Container image built from the [schema-tools](https://github.com/hmedney-segment/schema-tools) repo.

#### Pull Request

The [Pull Request GitHub Action](.github/workflows/pr.yml) runs on each PR to `main`.

- Assigns label(s) to the PR indicating whether the change includes events and/or tracking plan changes. This helps with PR triage.
- Generates a schema impact report. The impact report works by generating ready-to-deploy tracking plan JSON for the PR branch and the `main` (live) branch. These 2 JSON objects are diffed, and the differernces are output to the Check Summary.

#### Build

The [Build Github Action](.github/workflows/build.yml) runs on commits to `main`.

- Rebuilds a static doc site from all events. The static site is deployed to this repo's GitHub Pages site.
- Generates Protocols tracking plan JSON file(s) and deploys them to Segment via the Config API. If an tracking plan exists in the Segment workspace with the same display name, it is overwritten.
