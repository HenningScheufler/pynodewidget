rule step1:
    output:
        "intermediate.txt"
    shell:
        "echo hello > {output}"

rule step2:
    input:
        "intermediate.txt"
    output:
        "result.txt"
    shell:
        "cat {input} > {output}"
