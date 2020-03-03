function feed(root, args, context, info) {
  context.prisma.links();
}
function link(parent, args) {
  links.filter(l => l.id == "link-" + args.id)[0];
}

module.exports = { feed, link };
