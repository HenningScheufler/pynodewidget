"""Grouped-entries component: a named dict of value sets sharing one layout."""

from typing import Any, Dict, List, Optional, Literal, TYPE_CHECKING
from pydantic import BaseModel, Field
from .base import Component

if TYPE_CHECKING:
    from . import ComponentType


class EntryGroupValue(BaseModel):
    """The value of an entry group.

    Attributes:
        selected: The entry currently shown in the UI.
        entries: Named entries; each maps the child-field ids to their values.
    """

    selected: str
    entries: Dict[str, Dict[str, Any]] = Field(default_factory=dict)


class EntryGroupComponent(Component):
    """A named set of entries sharing one field layout.

    Renders a dropdown of entry names plus add/delete buttons, a rename field,
    and the child ``fields`` bound to the selected entry. All child values live
    *inside* this component's value (``node_values[node_id][group_id]``), so
    child field ids are scoped to the group and do not collide with other
    top-level component ids.

    Type discriminator: "entry-group"

    Example use case: one node per parameter dimension whose entries are the
    named parameter blocks of a YAML file.
    """

    type: Literal["entry-group"] = "entry-group"
    label: Optional[str] = None

    # Field components rendered for the selected entry (forward reference for
    # the recursive ComponentType union).
    fields: List["ComponentType"] = Field(
        default_factory=list,
        description="Field components shown for the selected entry",
    )

    value: EntryGroupValue = Field(
        ...,
        description="The named entries and the currently selected entry name",
    )
