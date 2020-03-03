function links(parent, args, context) {
  return context.prisma.user({ id: args.id }).links();
}

module.exports = {
  links
};
