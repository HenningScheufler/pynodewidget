#%%
"""Graphical parameter sweep -> generated Snakefile.

The graph is the source of truth: a ``ParamSource`` node (a wildcard and its
sweep values) feeds rules that carry that ``{wildcard}``. From the same graph we
generate a real parametric Snakefile that lists the values and aggregates the
swept outputs with ``expand(...)``.

Run in marimo/Jupyter to interact, or as a script to export HTML/JSON and print
the generated Snakefile.
"""

from pynodewidget.snakemake_flow import (
    Rule,
    ParamSource,
    sweep_to_flow,
    sweep_to_snakefile,
)

# A sweep over {sample} = A, B, C: `simulate` runs once per sample, `all`
# aggregates every result.
sources = [ParamSource("sample", ["A", "B", "C"])]
rules = [
    Rule("all", input=["results/{sample}.out"]),
    Rule(
        "simulate",
        input=["data/{sample}.in"],
        output=["results/{sample}.out"],
        shell="python run.py {input} {output}",
    ),
]

widget = sweep_to_flow(sources, rules)
widget.height = "640px"

# In marimo/Jupyter this line renders the interactive graph.
widget

#%%
# The generated parametric Snakefile (samples = [...] + expand(...)).
print(sweep_to_snakefile(sources, rules))

#%%
widget.export_html("param_sweep.html", title="Parameter sweep", interactive=True, embed_assets=True)
widget.export_json("param_sweep.json")
print("Wrote param_sweep.html and param_sweep.json")

# %%
