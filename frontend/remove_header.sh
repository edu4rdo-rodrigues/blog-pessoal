#!/bin/bash

# Verifica se o número de argumentos está correto
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <file>"
    exit 1
fi

# Caminho do arquivo
file="$1"

# Diretório do script
script_dir=$(dirname "$0")

# Log do caminho do arquivo
echo "TM_FILEPATH: $file" >> "$script_dir/logfile.log"

# Verifica se o arquivo existe
if [ ! -f "$file" ]; then
    echo "File does not exist: $file"
    exit 1
fi

# Cria um arquivo temporário
tmp_file=$(mktemp)

# Executa o comando sed para remover o cabeçalho do arquivo
sed 's#^// ~/##' "$file" > "$tmp_file"

# Substitui o arquivo original pelo arquivo temporário
mv "$tmp_file" "$file"
