# Pull request

## Description

<!-- Provide a brief description of the changes in this PR -->

## Related issues

<!-- Link to any related issues -->

Closes #<!-- issue number -->

## Type of change

<!-- Mark the relevant option with an "x" -->

- [ ] Bug fix (non-breaking change that fixes an issue)
- [ ] New feature (non-breaking change that adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to change)
- [ ] Documentation update
- [ ] Style/UI change (visual improvements, no functional changes)
- [ ] Accessibility improvement
- [ ] Refactoring (code changes that neither fix a bug nor add a feature)
- [ ] Performance improvement
- [ ] Chore (dependency updates, tooling changes, etc.)

## Testing

<!-- Describe how you tested your changes -->

### Testing checklist

- [ ] **Functionality**: Component works as expected
- [ ] **TypeScript**: No TypeScript errors
- [ ] **Storybook**: Stories render correctly
- [ ] **Accessibility**:
    - [ ] Keyboard navigation works
    - [ ] Screen reader compatible
    - [ ] Focus management is correct
    - [ ] Color contrast meets WCAG AA standards
- [ ] **Responsive**: Works on mobile, tablet, and desktop
- [ ] **Browser testing**: Tested in multiple browsers
- [ ] **Performance**: No performance regressions

### Manual testing steps

<!-- Provide step-by-step instructions for manual testing -->

1.
2.
3.

## Screenshots/Videos

<!-- Add screenshots or videos demonstrating the changes -->

### Before

<!-- Screenshot/video of the current state -->

### After

<!-- Screenshot/video of the changes -->

## Component API changes

<!-- If this affects component APIs, document the changes -->

### New props

```tsx
interface ComponentProps {
    // New props added
    newProp?: string;
}
```

### Changed props

```tsx
// Before
oldProp: string;

// After
oldProp: "option1" | "option2";
```

### Removed props

```tsx
// These props have been removed
removedProp?: boolean;
```

## Accessibility considerations

<!-- Describe accessibility testing and considerations -->

- [ ] ARIA labels are present and correct
- [ ] Semantic HTML is used appropriately
- [ ] Keyboard navigation follows expected patterns
- [ ] Screen reader announcements are appropriate
- [ ] Focus indicators are visible and clear
- [ ] Color is not the only means of conveying information

## Code quality checklist

- [ ] **Code style**: Follows project conventions
- [ ] **ESLint**: No linting errors
- [ ] **Prettier**: Code is properly formatted
- [ ] **TypeScript**: Full type coverage
- [ ] **Imports**: Uses correct import paths (`@/components/...`)
- [ ] **Performance**: No unnecessary re-renders or heavy computations
- [ ] **Error handling**: Appropriate error boundaries and validation

## 📚 Documentation

<!-- Mark what documentation has been added/updated -->

- [ ] Component props are documented with TypeScript interfaces
- [ ] Storybook stories cover all variants
- [ ] Usage examples are provided
- [ ] Accessibility guidelines are documented
- [ ] CHANGELOG.md is updated (if applicable)

## Breaking changes

<!-- If this includes breaking changes, describe them and provide migration guidance -->

### Migration guide

```tsx
// Before
<OldComponent prop="value" />

// After
<NewComponent newProp="value" />
```

## Additional context

<!-- Add any additional context, concerns, or questions -->

## Reviewer notes

<!-- Any specific areas you'd like reviewers to focus on -->

---

## For maintainers

### Review checklist

- [ ] **Code quality**: Code follows project standards
- [ ] **Testing**: Adequate testing coverage
- [ ] **Documentation**: Proper documentation provided
- [ ] **Accessibility**: Meets WCAG 2.1 AA standards
- [ ] **Performance**: No performance regressions
- [ ] **API design**: API is consistent with existing patterns
- [ ] **Breaking changes**: Properly documented with migration guide
- [ ] **Visual design**: Matches design system specifications
