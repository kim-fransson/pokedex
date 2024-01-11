export const getKey = (orderBy: OrderBy): OrderByKeys => {
  if ("id" in orderBy) {
    return `id_${orderBy.id}`;
  }

  if ("name" in orderBy) {
    return `name_${orderBy.name}`;
  }

  return "id_asc";
};

export const getOrderBy = (key: OrderByKeys): OrderBy => {
  switch (key) {
    case "id_asc": {
      return { id: "asc" };
    }
    case "id_desc": {
      return { id: "desc" };
    }
    case "name_asc": {
      return { name: "asc" };
    }
    case "name_desc": {
      return { name: "desc" };
    }
    default:
      return { id: "asc" };
  }
};
