#!/bin/bash

# Caminho do arquivo
file="$1"

# Verifica se o arquivo existe
if [ ! -f "$file" ]; then
    echo "File does not exist: $file"
    exit 1
fi



# Identifica a extensão do arquivo e adiciona comentário de acordo
case "${file##*.}" in
    tsx)
        # Verifica se já existe um comentário no topo do arquivo
        if grep -q "^// $file" "$file"; then
            echo "Já existe um comentário no topo do arquivo."
        else
            # Adiciona o comentário no topo do arquivo
            sed -i '1s#^#// '"$file\n"'#' "$file"
        fi
        ;;
    ts)
        # Verifica se já existe um comentário no topo do arquivo
        if grep -q "^// $file" "$file"; then
            echo "Já existe um comentário no topo do arquivo."
        else
            # Adiciona o comentário no topo do arquivo
            sed -i '1s#^#// '"$file\n"'#' "$file"
        fi
        ;;
    js)
        # Verifica se já existe um comentário no topo do arquivo
        if grep -q "^// $file" "$file"; then
            echo "Já existe um comentário no topo do arquivo."
        else
            # Adiciona o comentário no topo do arquivo
            sed -i '1s#^#// '"$file\n"'#' "$file"
        fi
        ;;
    mjs)
        # Verifica se já existe um comentário no topo do arquivo
        if grep -q "^// $file" "$file"; then
            echo "Já existe um comentário no topo do arquivo."
        else
            # Adiciona o comentário no topo do arquivo
            sed -i '1s#^#// '"$file\n"'#' "$file"
        fi
        ;;
    css)
        # Verifica se o comentário CSS já existe
        if grep -q "^/\* $file \*/" "$file"; then
            echo "Já existe um comentário CSS no arquivo."
        else
            # Adiciona o comentário no topo do arquivo
            sed -i '1i\/* '"$file"' */' "$file"
        fi
        ;;
    *)
        echo "Extensão não suportada: ${file##*.}"
        exit 1
        ;;
esac

# Remove "~/" do cabeçalho do arquivo usando sed
sed -i 's#^// ~/#// #' "$file"

# Remove "~/" do início do comentário CSS no arquivo usando sed
sed -i 's#^/\* ~/#/* #' "$file"

# Identifica a extensão do arquivo
extension="${file##*.}"

# Verifica se a extensão do arquivo é .css
if [ "$extension" = "css" ]; then
# Substitui os caracteres "-" por "_" nos seletores CSS
sed -i 's/\([[:alnum:]]\{1,\}\)-\([0-9]\)/\1_\2/g' "$file"

# Substitui os caracteres "-" por camelCase nos seletores CSS
sed -i 's/\.\([[:alnum:]]\{1,\}\)-\([[:alnum:]]\{1,\}\)/.\1\u\2/g' "$file"



fi