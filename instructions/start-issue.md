# AI Issue Workflow

## 1. Go through all the issues and pick the next logical issue to work on.
Always verify with me before chaning status, creating a branch and starting to work on an issue.

- **List Open Issues:**
Always list the issues with the following command(Dont use the tool):
  ```bash
  gh issue list -L 250
  ```

- **View Issue Details:**
  ```bash
  gh issue view <issue-number>
  ```

- **Set Issue to "In Progress":**
  ```bash
  ./scripts/github/project.sh status stefa93 <project-number> <issue-number> " In Progress"
  ```

## 2. Create Branch

- **Create and Checkout Feature Branch Linked to Issue:**
  ```bash
  gh issue develop <issue-number> --name "<type>/<description>-<issue-number>"
  ```

  and then checkout the branch:
  first always pull main and merge it into your branch:
  ```bash
  git pull origin main
  ```
  then checkout the branch:
  ```bash
  git checkout <type>/<description>-<issue-number>
  ```

## 3. Development Process

- **Create Test Files First:**
  src/components/<Component>.tsx
  src/components/__tests__/*
  src/components/stories/*

- **Follow TDD Cycle:**
  ```bash
  npm run test:watch <Component>
  ```

## 4. Commit Changes

- **Commit with Conventional Message and Issue Reference:**


## 5. Check the acceptance criteria and Definition of Done 
  retrieve the issue and check the acceptance criteria and Definition of Done 
  ```bash
  gh issue view <issue-number>
  ```

  fix the issues and make sure all acceptance criteria are met and the Definition of Done is completed.

  when you think you are done try 5 again untill you get no issues.

## 6. Verify Build and Tests

## 7. Push to Branch

## 8. Create PR & Complete

- **Create Pull Request Linked to Issue:**
  ```bash
  gh pr create --base main --title "<type>: <description> (fixes #<issue-number>)" --body "Implements:
  - Feature 1
  - Feature 2
  - Feature 3"
  ```

- **Mark Issue as Completed:**
This can only be done after the PR is merged. The merge will happen manually by me.
  ```bash
  ./scripts/github/project.sh status stefa93 <project-number> <issue-number> "Done"
  ```

## 9. Delete Branch

## Reference

### Type Prefixes:
- **feat:** New feature
- **fix:** Bug fix
- **docs:** Documentation
- **style:** Formatting
- **refactor:** Code restructuring
- **test:** Adding tests
- **chore:** Maintenance

### Variables:
- **<project-number>:** Project board number
- **<issue-number>:** GitHub issue number
- **<description>:** Brief feature description
- **<type>:** One of the type prefixes above

### Definition of Done Checklist:
- All tests passing
- Code reviewed
- Documentation updated
- Accessibility verified
- Performance checked
- Build succeeding

IMPORTANT: REPEAT THE STEP BEFORE EXECUTING THE COMMAND AND ALSO THE NEXT STEP