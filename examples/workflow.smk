rule all:
    input:
        "results/summary.txt"

rule download:
    output:
        "data/raw.csv"
    shell:
        "curl -o {output} https://example.com/raw.csv"

rule clean:
    input:
        "data/raw.csv"
    output:
        "data/clean.csv"
    shell:
        "python clean.py {input} {output}"

rule analyze:
    input:
        "data/clean.csv"
    output:
        "results/stats.txt"
    shell:
        "python analyze.py {input} {output}"

rule plot:
    input:
        "data/clean.csv"
    output:
        "results/plot.png"
    shell:
        "python plot.py {input} {output}"

rule summary:
    input:
        "results/stats.txt",
        "results/plot.png"
    output:
        "results/summary.txt"
    shell:
        "cat {input} > {output}"
