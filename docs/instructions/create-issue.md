# Creating Issues

This guide explains how to create and manage GitHub issues using our automated issue handler script.

## Usage

### Creating a New Issue

```bash
./scripts/issue-handler.sh create "[Type] Issue Title" "label1,label2"
```

Example:

```bash
./scripts/issue-handler.sh create "[Feature] Add User Authentication" "feature,priority-1"
```

### Updating an Existing Issue

```bash
./scripts/issue-handler.sh update <issue-number> "label1,label2"
```

Example:

```bash
./scripts/issue-handler.sh update 42 "bug,priority-1"
```

Note: Labels are optional for both create and update commands.

## Issue Types

Issues should be prefixed with one of these types:

- `[Feature]` - New features or functionality
- `[Bug]` - Bug fixes
- `[Enhancement]` - Improvements to existing features
- `[Setup]` - Setup and configuration tasks
- `[Docs]` - Documentation updates
- `[Refactor]` - Code refactoring
- `[Test]` - Test-related tasks

## Template Structure

The script uses the template from `docs/templates/issue-template.md` with the following sections:

### User Story

```
As a [role],
I want [goal/desire],
So that [benefit].
```

### Acceptance Criteria

- List specific, testable criteria
- Use checkbox format: `- [ ] Criterion`
- Must be verifiable

### Technical Tasks

- Break down implementation steps
- Use checkbox format: `- [ ] Task`
- Be specific and actionable

### Definition of Done

Standard items:

- All acceptance criteria met
- Tests written and passing
- Documentation updated
- Code reviewed
- PR merged

### Dependencies

- List blocking issues
- External dependencies
- Required setup/configuration

### Story Points

Use Fibonacci sequence: 1, 2, 3, 5, 8, 13

- 1-2: Simple changes
- 3-5: Medium complexity
- 8-13: Complex features

### Notes

- Additional context
- Implementation details
- Considerations
- Links to resources

## Best Practices

1. **Clear Titles**

   - Start with type in brackets
   - Be specific and concise
   - Example: "[Feature] Implement OAuth2 Authentication"

2. **User Stories**

   - Focus on user value
   - Clear benefit statement
   - Identify correct user role

3. **Acceptance Criteria**

   - Specific and testable
   - Cover edge cases
   - Include validation rules

4. **Technical Tasks**

   - Break down into manageable chunks
   - Include setup steps
   - List dependencies first

5. **Story Points**

   - Consider complexity, not time
   - Include testing effort
   - Account for documentation

6. **Labels**
   - Use consistent categorization
   - Include priority level
   - Mark dependencies

## Common Labels

- `feature` - New features
- `bug` - Bug fixes
- `enhancement` - Improvements
- `documentation` - Documentation updates
- `priority-0` - Critical
- `priority-1` - High priority
- `priority-2` - Medium priority
- `priority-3` - Low priority
- `frontend` - Frontend related
- `backend` - Backend related
- `infrastructure` - Infrastructure related

## Examples

See example issues in `docs/templates/examples/`:

- `coverage-95.md` - Test coverage target
- `coverage-infra.md` - Infrastructure setup
- `coverage-cicd.md` - CI/CD integration
