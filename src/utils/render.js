export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
};

export const render = (container, component, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(component.getElement());
      break;
    case RenderPosition.BEFOREEND:
      container.append(component.getElement());
      break;
    default:
      throw new Error('Функция render принимает неверные данные');
  }
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

export const replace = (newComponent, oldComponent)  => {
  const newElement = newComponent.getElement();
  const oldElement = oldComponent.getElement();
  const parentElement = oldElement.parentElement;

  const isExistElements = !!(parentElement && newElement
    && oldElement);
  if (isExistElements && parentElement.contains(oldElement)) {
    parentElement.replaceChild(newElement, oldElement);
  }
};

export const remove = (element) => {
  element.getElement().remove();
  component.removeElement();
};
