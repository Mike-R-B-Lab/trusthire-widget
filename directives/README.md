# Directives

This directory contains Standard Operating Procedures (SOPs) written in Markdown. These serve as the "Layer 1" of the architecture: plain English instructions on what to do.

## Directives vs Scripts
- **Directives** tell the agent *what* to do and *how* to process the results.
- **Scripts** (in `../execution/`) do the actual work.

## Format
Directives should roughly follow this structure:
- **Goal**: What are we trying to achieve?
- **Inputs**: What data do we need?
- **Process**: Step-by-step instructions.
- **Outputs**: What is the final result?
