---
sidebar-position: 2
---

# Categories

Let's add our first category to Suta.

### What you'll need

- [Suta](https://suta.tk) invited to your server.
- Suta settings already set up. (See [Suta settings](./settings.mdx))

### What is it?

A category is an option for the user to select from.

Each category has a name, a description, and an emoji.

The categories will appear in the ticket creation menu dropdown.

## Let's start

The first thing we need to do is create the basic category.

- Create a category using the command `/category add <name> <description> <emoji>`.
  - You can add additional options after the name, description, and emoji.
    - `(embed-desc)` - Set the embed description upon creation of a ticket.
    - `(embed-message)` - Set the embed message upon creation of a ticket.
      - You can put `{user}` inside of the `embed-desc` or `embed-message` to insert the ticket creator.
      - You can also put `\n` inside of the `embed-desc` or `embed-message` to insert a new line.

Once you've created the category, you can see it in the ticket creation menu.

To refresh your ticket creation menu, use the command `/ticket menu`.

After you've created the category, you can add more categories.