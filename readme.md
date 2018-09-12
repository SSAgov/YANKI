 # YANKI: attribute removal tool
  
A troubleshooting tool that lets you quickly remove (yank) attributes from a web page. 
  
## Why would you want to remove attributes?
When certain attributes are used improperly, they can cause issues with screen readers.
YANKI can be used to "yank" the attributes and allow a retest of the page with the attributes removed.

## Why not just use Dev Tools (F12)?
Attributes can be removed using the browser's native Developer Tools, but YANKI lets you to do it much faster and in one shot.

## What attributes can you remove?
YANKI can remove any attribute! It can be used to remove only attributes that have a specific value: just enter *attribute=value* in the box. Other examples: *role=grid* *tabindex=0* *aria-label="This Is My Label"*

Here are a few practical examples relating to accessibility issues:

> ### role
> 
> The intent of the role attribute is to define the role or purpose of an element. When assistive technologies (screen readers) detect the role attribute on an element, certain assumptions are made about the structure and behavior. These assumptions are based on guidance from the W3's [WAI-ARIA Authoring Practices](http://www.w3.org/TR/wai-aria-practices-1.1/).
> 
> Developers may think they are being helpful by applying role attributes to the structures they create, however, they may not be aware of the proper practices. This results in the role attribute doing more harm than good to users who rely on a screen reader to navigate the web.
> 
> In this scenario, a tester can yank the role attribute and then retest using the screen reader to see if removing the role attribute offers better behavior.

> ### tabindex
> 
> The tabindex attribute can be applied to any HTML element. Providing a non-negative value will place the element in the keyboard tab order.
>
> When elements are intended to be interactive, this is necessary. However, developers may go overboard and add tabindex to more elements than necessary. This results in a bad experience for keyboard-only users (users who do not use a mouse).
>
> In this scenario, a tester can remove tabindex attributes from the page to discover what the native keyboard tab order would be like (only stopping on native controls like links, buttons, and form elements).

> ### aria-*
>
> Any aria attributes (aria-label, aria-describedby, aria-expanded, ...) can be removed if they are found to cause issues.

## Sounds swanky! How do I install YANKI?

YANKI is a browser based "favelet" that, essentially, installs with a drag and drop, and is launched with the click of a button. Users can visit this [installation page](https://www.ssa.gov/accessibility/yanki/yanki.html) for browser installation instructions. 

## Who maintains YANKI?

YANKI is maintained by the Accessible Solutions Branch at SSA.
